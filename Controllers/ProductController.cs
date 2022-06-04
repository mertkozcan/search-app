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

       [HttpGet("GetBrands", Name = "GetBrands")]
        public string GetBrands() {
             DBAccess dba =new DBAccess();

            DataTable dt = new DataTable();

            dba.FillDt(ref dt,"SELECT DISTINCT Brand,COUNT(*) AS BrandCount FROM dbo.Products GROUP BY Brand");

            string json=JsonConvert.SerializeObject(dt);

            return json;
        }
    }
}
