﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ineedgamer.Controllers
{
    public class GamesController : Controller
    {
        // GET: Games
        public ActionResult Index()
        {
            return View();
        }
    }
}