package com.ri.contactmanager.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;





@Controller
public class PageController {


    @GetMapping("/home")
    public String home(Model model) {
        System.out.println("Home page handler");
        model.addAttribute("Name", "Rishan");
        return "home";
    }
    

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/services")
    public String services() {
        return "services";
    }
    
    
}
