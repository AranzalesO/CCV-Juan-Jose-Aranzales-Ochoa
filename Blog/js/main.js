// Map
var api = "AIzaSyDU99KPyuIircdZkuVdmX3BvfrS9WTGiaE";

function initMap() {
    var position = {
        lat: -75.591512,
        lng: 6.247608
    };
    var noop = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var tracker = new google.maps.InfoWindow({
        content: "<h2>ARANZALES</h2>"
    });
    var item = new google.maps.Marker({
        position: position,
        map: noop,
        title: "Aranzales"
    });
    item.addListener("click", function() {
        tracker.open(noop, item);
    });
}

// Sticky nav and skills
$(function() {
    $("#filtros a").on("click", function() {
        return $("#filtros a").removeClass("activo"), $(this).addClass("activo"), $(".registrados tbody tr").hide(), "pagados" == $(this).attr("id") ? $(".registrados tbody tr.pagado").show() : $(".registrados tbody tr.no_pagado").show(), false;
    });
    $(".site-name").lettering();
    $('body.technologies .principal-navigation a:contains("Technologies")').addClass("activo");
    $('body.projects .principal-navigation a:contains("Projects")').addClass("activo");
    var n = $(window).height();
    var margin_t = $(".bar").innerHeight();
    $(window).scroll(function() {
        if ($(window).scrollTop() > n) {
            $(".bar").addClass("fixed");
            $("body").css({
                "margin-top": margin_t + "px"
            });
        } else {
            $(".bar").removeClass("fixed");
            $("body").css({
                "margin-top": "0px"
            });
        }
    });
    $(".mobile-menu").on("click", function() {
        $(".principal-navigation").slideToggle();
    });
    $(window).resize(function() {
        if ($(document).width() >= 768) {
            $(".principal-navigation").show();
        } else {
            $(".principal-navigation").hide();
        }
    });
    $(".skills-card .info-me:first").show();
    $(".skills-menu a:first").addClass("activo");
    $(".skills-menu a").on("click", function() {
        $(".skills-menu a").removeClass("activo");
        $(this).addClass("activo");
        $(".hide").hide();
        var parent = $(this).attr("href");
        return $(parent).fadeIn(1e3), false;
    });

    // Summary animated
    if (jQuery(".personal-summary").length > 0) {
        $(".personal-summary").waypoint(function() {
            $(".personal-summary li:nth-child(1) p").animateNumber({
                number: 6
            }, 1200);
            $(".personal-summary li:nth-child(2) p").animateNumber({
                number: 7
            }, 1200);
            $(".personal-summary li:nth-child(3) p").animateNumber({
                number: 3
            }, 1500);
            $(".personal-summary li:nth-child(4) p").animateNumber({
                number: 4
            }, 1500);
        }, {
            offset: "60%"
        });
    }

    // Clock
    $(".countdown").countdown("2020/12/31 11:59:59", function(event) {
        $("#dias").html(event.strftime("%D"));
        $("#horas").html(event.strftime("%H"));
        $("#minutos").html(event.strftime("%M"));
        $("#segundos").html(event.strftime("%S"));
    });

    // Colorbox
    $(".project-info").colorbox({
        inline: true,
        width: "50%"
    });
    $(".contact-button").colorbox({
        inline: true,
        width: "50%"
    });
});