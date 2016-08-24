package com.prusoft.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by 치국 on 2016-08-24.
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Model model, @RequestParam(value="name", required=false, defaultValue="World")String name){
        model.addAttribute("name", name);
        return "home";
    }
}
