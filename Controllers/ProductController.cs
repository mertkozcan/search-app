using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace HepsiburadaSearchApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        public ProductController()
        {
          
        }

        [HttpGet]
        public string Get()
        {
            DBAccess dba =new DBAccess();

            DataTable dt = new DataTable();

            dba.FillDt(ref dt,"SELECT * FROM dbo.Products");

            string json=JsonConvert.SerializeObject(dt);

            return json;
        }

       [HttpPost("GetBrands", Name = "GetBrands")]
        public string GetBrands(List<string> selectedColors) {
             DBAccess dba =new DBAccess();

            DataTable dt = new DataTable();

             string whereClause ="";

            if (selectedColors.Count>0)
            {
                whereClause="WHERE Color IN (";
                for (int i = 0; i < selectedColors.Count; i++)
                {
                    whereClause+= "'" + selectedColors[i] + "'";

                    if (i!=selectedColors.Count-1)
                    {
                        whereClause+=",";
                    }
                    else {
                        whereClause+=")";
                    }
                }
            }

            string query="SELECT DISTINCT Brand,COUNT(*) AS BrandCount FROM dbo.Products " + whereClause + "  GROUP BY Brand";

            dba.FillDt(ref dt,query);

            string json=JsonConvert.SerializeObject(dt);

            return json;
        }

        [HttpPost("GetColors", Name = "GetColors")]
        public string GetColors(List<string> selectedBrands) {
            DBAccess dba =new DBAccess();

            DataTable dt = new DataTable();

            string whereClause ="";

            if (selectedBrands.Count>0)
            {
                whereClause="WHERE Brand IN (";
                for (int i = 0; i < selectedBrands.Count; i++)
                {
                    whereClause+= "'" + selectedBrands[i] + "'";

                    if (i!=selectedBrands.Count-1)
                    {
                        whereClause+=",";
                    }
                    else {
                        whereClause+=")";
                    }
                }
            }

            string query="SELECT DISTINCT Color,COUNT(*) AS ColorCount FROM dbo.Products " + whereClause + " GROUP BY Color";

            dba.FillDt(ref dt,query);

            string json=JsonConvert.SerializeObject(dt);

            return json;
        }

        [HttpGet("SearchProduct/{searchText}")]
        public string SearchProduct(string searchText) {
             DBAccess dba =new DBAccess();

            DataTable dt = new DataTable();

            dba.FillDtParam(ref dt,"SELECT * FROM dbo.Products WHERE ProductName LIKE '%' + @ProductName + '%'",new string[]{"@ProductName"},new object[]{searchText.ToLower()} );

            string json=JsonConvert.SerializeObject(dt);

            return json;
        }

        [HttpPost("SearchProductWithFilter")]
        public string SearchProductWithFilter(SearchFilterModel model) {
             DBAccess dba =new DBAccess();

            DataTable dt = new DataTable();

            string whereClause ="WHERE ";

            if (model.BrandFilters.Count>0)
            {
                whereClause+="Brand IN (";

                for (int i = 0; i < model.BrandFilters.Count; i++)
                {
                    whereClause+= "'" + model.BrandFilters[i] + "'";

                    if (i!=model.BrandFilters.Count-1)
                    {
                        whereClause+=",";
                    }
                    else {
                        whereClause+=")";
                    }
                }
            }

             if (model.ColorFilters.Count>0)
            {
                if (model.BrandFilters.Count>0)
                {
                    whereClause+=" AND Color IN (";
                }
                else {
                    whereClause+="Color IN (";
                }               

                for (int i = 0; i < model.ColorFilters.Count; i++)
                {
                    whereClause+= "'" + model.ColorFilters[i] + "'";

                    if (i!=model.ColorFilters.Count-1)
                    {
                        whereClause+=",";
                    }
                    else {
                        whereClause+=")";
                    }
                }
            }

            dba.FillDt(ref dt,"SELECT * FROM dbo.Products " + whereClause );

            string json=JsonConvert.SerializeObject(dt);

            return json;
        }
    }
}
