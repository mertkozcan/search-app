using System;
using System.Data;
using System.Data.SqlClient;

public class DBAccess
{
    public SqlConnection connection;

    public DBAccess()
    {
        connection = new SqlConnection(GetConnectionString());
    }

    private string GetConnectionString() {

        return "Data Source=DESKTOP-6M97N0N;Initial Catalog=HepsiburadaSearchDB;Integrated Security=True;Connection Timeout=10;";
    }

     public bool FillDt(ref DataTable dt, string query)
    {
        bool result =true;
        try
        {
            if (connection.State==ConnectionState.Closed)
            {
                connection.Open();
            }

            var command = new SqlCommand(query, connection);
            command.CommandTimeout = 20;
            var da = new SqlDataAdapter(command);
            da.Fill(dt);
        }
        catch (SqlException exSQL)
        {
            result=false;
        }
        catch (Exception ex)
        {
             result=false;
        }
        finally
        {
            if (connection is object  && connection.State == ConnectionState.Open)
            {
                connection.Close();
            }
        }

        return result;
    }

     public bool FillDtParam(ref DataTable dt, string query, string[] queryParams, object[] paramValues)
    {
        bool result =true;
        try
        {
            if (connection.State==ConnectionState.Closed)
            {
                connection.Open();
            }

            var command = new SqlCommand(query, connection);
            command.CommandTimeout = 20;

            for (int i = 0; i <= queryParams.Length - 1; i++)
            {
                var param = new SqlParameter(queryParams[i], paramValues[i]);
                command.Parameters.Add(param);
            }

            var da = new SqlDataAdapter(command);
            da.Fill(dt);
        }
        catch (SqlException exSQL)
        {
            result=false;
        }
        catch (Exception ex)
        {
             result=false;
        }
        finally
        {
            if (connection is object  && connection.State == ConnectionState.Open)
            {
                connection.Close();
            }
        }

        return result;
    }

}