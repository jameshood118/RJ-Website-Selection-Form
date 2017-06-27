var brand;
var selectedtheme;
var type;
var group;
var url;
var clients;



$(function () {
    //Set Initial value of delegates to no
    $(".teamdelegate").val("No");

    $("input:radio[name=billing]").click(function () {
        billingSelection();
    });

    $("#newStartDate").datepicker();
    $('.phone').mask('000-000-0000');
    $('.zip').mask('00000-0000');

    //The classes drive what the user will see depending on the site type: transitioning, current, csfree, cspaid, premium
    //all: all site types will have elements with this class. 

    //Finds explicitly defined classes and recursively adds to all descendants. 
    //For productivity to avoid tagging every element on the page.

    addCSSClassRecursively($(".all"), "all");
    addCSSClassRecursively($(".transitioning"), "transitioning");
    addCSSClassRecursively($(".current"), "current");
    addCSSClassRecursively($(".csfree"), "csfree");
    addCSSClassRecursively($(".rjfsfree"), "rjfsfree");
    addCSSClassRecursively($(".cspaid"), "cspaid");
    addCSSClassRecursively($(".premium"), "premium");
    addCSSClassRecursively($(".AlexBrown"), "AlexBrown");
    addCSSClassRecursively($(".sc7"), "sc7");

    type = getQueryVar("type");
    group = getQueryVar("group");



    $("#frmName").attr("action", "process2.asp?" + "type=" + type + "&group=" + group);

    switch (group) {
        case "AlexBrown":
            $(".RJ").remove();
            brand = "Alex Brown";
            break;

        default:
            $(".AlexBrown").remove();
            brand = "Raymond James";
            break;
    }
    //Remove all elements that do not have the relavent css class. 
    //Removing to assist with validation rather than having to determine which elements are relavent.
    //Do the thing! Show specific elements based on the group type, also hides specific things too
    switch (type) {
        case "new":
            if (group == "transitioning") {
                $("#frmName").find(":not(.transitioning, .all)").remove().end().hide();
                $("h1")[0].innerText = "New Website Setup Form (Transitioning Advisors)";
                document.title = "New Website Setup Form (Transitioning Advisors)";
                $(".SetUpFee").empty().append("The cost to setup the website is $350.");
            } else {
                //removes everything except all and current. Current are RJA/RJFS and IAD/CORR
                $("#frmName").find(":not(.current, .all)").remove().end().hide();
                $("h1")[0].innerText = "New Website Setup Form";
                document.title = "New Website Setup Form";   
            }
            $("#pContact").html(" For questions or comments about this form please contact <a href=\"mailto:webservices@raymondjames.com?subject=New Website - " + group + "\">webservices@raymondjames.com</a> or call extension 75423.");
            $(".OurApproach_Migration").remove();
            $(".OurApproach_New").show();
            $(".WhatMakesUsDifferent_Migration").remove();
            $(".WhatMakesUsDifferent_New").show();
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option>');
            break;
        case "csfree":
            $("#frmName").find(":not(.csfree, .all)").remove().find(":not(.cspaid, .all)").remove().find(":not(.premium, .all)").remove();
            $("#disclosure").remove();
            $("h1")[0].innerText = "Advisor Website Order Form";
            document.title = "Advisor Website Order Form";
            $("#pContact").html("For questions about this form email <a href=\"mailto:webservices@raymondjames.com?subject=Website Migration Form - " + group + "\">webservices@raymondjames.com</a> or call extension 75423.");
            $(".csfreebillto").html("Each RJFS branch is allotted one complimentary website under the Bronze support package. We require billing information for any charges incurred that exceed the limits of the Bronze support package.");
            $(".csfreebronze").empty().append('<input type="radio" name="supportPackage" value="Bronze - Complimentary" />&nbsp Bronze &ndash; Complimentary* for RJFS, regular price of $25/month<span style="font-weight:normal"> &ndash; Bronze covers secure website hosting, built-in automated content feeds, website compliance and self-editing.');
            $(".csfreesupportpackagetext").html("*Each RJFS branch is allotted one complimentary Bronze support package, any additional costs that exceed to limits of the support package are to be absorbed by the advisor or branch. If the Bronze support package does not meet your needs, you will be responsible for the entire cost of the Silver or Gold support package.");
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option>');
            break;
        case "sc7":
            $("#frmName").find(":not(.sc7, .all)").remove();
            $("#disclosure").remove();
            $("h1")[0].innerText = "Advisor Website Migration (SC7) Form";
            document.title = "Advisor Website Migration (SC7) Form";
            $("#pContact").html("For questions about this form email <a href=\"mailto:webservices@raymondjames.com?subject=SC7 Website Migration Form - " + group + "\">webservices@raymondjames.com</a> or call extension 75423.");
            $(".csfreeHide").hide();
            $(".OurApproach_Migration").show();
            $(".OurApproach_New").remove();
            $(".WhatMakesUsDifferent_Migration").show();
            $(".WhatMakesUsDifferent_New").remove();
            $(".PrimContact").show();
            $(".TeamContact").show();
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option><option value="Use_Current">Use My Current Theme</option>');
            //Support for SC7 Free sites, this adds the same options as the CSfree options, but keeps it within the SC7 data set
            if (group == "rjfsfree") {
                $(".csfreebillto").html("Each RJFS branch is allotted one complimentary website under the Bronze support package. We require billing information for any charges incurred that exceed the limits of the Bronze support package.");
                $(".csfreebronze").empty().append('<input type="radio" name="supportPackage" value="Bronze - Complimentary" />&nbsp Bronze &ndash; Complimentary* for RJFS, regular price of $25/month<span style="font-weight:normal"> &ndash; Bronze covers secure website hosting, built-in automated content feeds, website compliance and self-editing.');
                $(".csfreesupportpackagetext").html("*Each RJFS branch is allotted one complimentary Bronze support package, any additional costs that exceed to limits of the support package are to be absorbed by the advisor or branch. If the Bronze support package does not meet your needs, you will be responsible for the entire cost of the Silver or Gold support package.");
            } else {}
            break;
        default:
            $("#frmName").find(":not(.csfree, .all)").remove().find(":not(.cspaid, .all)").remove().find(":not(.premium, .all)").remove();
            $("#disclosure").remove();
            $("h1")[0].innerText = "Advisor Website Order Form";
            document.title = "Advisor Website Order Form";
            $("#pContact").html("For questions about this form email <a href=\"mailto:webservices@raymondjames.com?subject=Website Migration Form - " + group + "\">webservices@raymondjames.com</a> or call extension 75423.");
            $(".csfreeHide").hide();
            $(".OurApproach_Migration").show();
            $(".OurApproach_New").remove();
            $(".WhatMakesUsDifferent_Migration").show();
            $(".WhatMakesUsDifferent_New").remove();
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option>');
            break;
    }
    
        //SC7 Validation: Group numbers, Live Validation for Niche Tiles, Team Member primary contact, done this way because they can only select one, but a radio button will not work correctly with the ASP processor
    if (type == "sc7") {
        $('input.NicheSelect[type="checkbox"]').click(function (e) {
            var num_checked = $('input.NicheSelect[type="checkbox"]:checked').length;
            if (num_checked > 6) {
                return setFild("You may select no more than 6 Client Groups to appear in the Niche Tile", $("[name='clientType']"));
                $(e.target).prop('checked', false);
            }
        });
        //Group Validation, do not show form for anything but group 1, 2, 3 or 99 for SC7 form
        switch (group) {
            case "group1":
                break;
            case "group2":
                break;
            case "group3":
                break;
            case "group99":
                break;
            case "rjfsfree":
                break;
            default:
                //Show an "Error" if they tried to go to anything except the preapproved SC7 groups, this validation only applies to SC7 forms
                document.title = "This is an error page";
                $("h1")[0].innerText = "This is an error page";
                $("#frmName").empty();
                $("#pContact").html("You have reached this page in error, please contact <a href='mailto:webservices@raymondjames.com' id='aContact'>Web Services</a> at ext. 75423");
                break;
        }
        //Show the niche options for client types
        $(".clientType").change(function () {
            $(this).parent().parent().toggleClass("ClientsSlide").find("div.nichebox").slideToggle();
        });
        //Validation for Primary contact on team members, only allowing for 1 single primary contact to be selected
        $('input.TeamContact[type="checkbox"]').click(function (e) {
            $('.TeamContact').not(this).attr('checked', false);
        });
    }
});

function setFild(txtAlert, objField) {
    alert(txtAlert);
    objField.focus();
    return false;
}

function billingSelection() {
    var selectedBilling = $("input[type='radio'][name='billing']:checked");


    switch (selectedBilling.val()) {
        case "Split FA Blotter":
            $(".spanSplitFaBlotterNumber").empty().append(' - Split FA number <input type="text" name="Number" class="Number textField requiredField form-control"/>');
            break;
        default:
            $(".spanSplitFaBlotterNumber").empty();
            break;

    }

}

function accept() {
    $("#disclosure").remove();
    $("#frmName").show();
}

function showHideDiv(elem, jqSelector) {
    if (elem.checked && elem.value === "Yes")
        $(jqSelector).closest("div").removeClass("hidden");
    else
        $(jqSelector).closest("div").addClass("hidden");
}

function showHideElement(elem, jqSelector) {
    if (elem.checked && (elem.value === "Yes" || elem.value === "I want to write my own introduction"))
        $(jqSelector).removeClass("hidden");
    else
        $(jqSelector).addClass("hidden");
}

function addTeam(elem, e) {
    e.preventDefault();

    //get the number of textboxes that exist.
    var cnt = $(".TeamContainer").children().length + 1;
    
    //If form is SC7 adds primary contact, otherwise doesnt
    if (type == "sc7") {
        var html = "<div><label style='padding-right:15px'> " + cnt + ". </label><input type='text' name='TeamMember" + cnt + "' style='width: 300px' class='textField form-control' />&nbsp;&nbsp;<input type='text' name='TeamMember" + cnt + "Title' style='width: 250px' class='textField form-control' /> <select name='TeamMember" + cnt + "Delegate' class='form-control teamdelegate'><option value='Yes'>Yes</option><option value='No' selected>No</option></select><input type='checkbox' name='TeamMember" + cnt + "Contact' value='Yes' class='TeamContact' /></div>";

        $("div.TeamContainer div:last-child").after(html);

        $('input.TeamContact[type="checkbox"]').click(function (e) {
            $('.TeamContact').not(this).attr('checked', false);
        });
    } else {
        var html = "<div><label style='padding-right:15px'> " + cnt + ". </label><input type='text' name='TeamMember" + cnt + "' style='width: 300px' class='textField form-control' />&nbsp;&nbsp;<input type='text' name='TeamMember" + cnt + "Title' style='width: 250px' class='textField form-control' /> <select name='TeamMember" + cnt + "Delegate' class='form-control teamdelegate'><option value='Yes'>Yes</option><option value='No' selected>No</option></select></div>";

        $("div.TeamContainer div:last-child").after(html);
    }
}


function validateForm(objFrm) {

    if ($(".theme").val() === "Nothing") {
        return setFild("Please select an image theme.", $(".theme"));
    } else {}

    if ($(".Number").val() === "") {
        return setFild("Please tell us what split billing number to use.", $(".Number"));
    } else {}
    //validates standalone radio button. 
    if (!validateRadio("[name='needConsultant']"))
        return setFild("Please tell us if you would like to discuss your site with a marketing consultant.", $("[name='needConsultant']"));

    if (!validateRadio("[name='billing']"))
        return setFild("Please tell us where to bill.", $("[name='billing']"));

    if (!validateRadio("[name='layout']"))
        return setFild("Please select a template option.", $("[name='layout']"));

    if (!validateRadio("[name='HomePage_Intro']"))
        return setFild("Please select the introduction you would like included in your site.", $("[name='HomePage_Intro']"));

    if (type == "sc7") {
        if (!validateRadio("[name='HomePage_Quote']"))
            return setFild("Please select a home page quote", $("[name='HomePage_Quote']"));
    } else {}

    if (type == "sc7") {
        if ($('input.NicheSelect[type="checkbox"]:checked').length <= "6") {} else {
            return setFild("You may select no more than 6 Client Groups to appear in the Niche Tile", $("[name='clientType']"));
        }
    }

    if (!validateCheckbox(".clientType"))
        return setFild("Please select the client groups you would like included in your site.", $(".clientType"));

    if (!validateCheckbox("[name='services']"))
        return setFild("Please select the services you would like included in your site.", $("[name='services']"));

    if (!validateRadio("[name='OurApproach']"))
        return setFild("Please select the pre-written you would like included on the \"Our Approach\" landing page.", $("[name='OurApproach']"));

    if (!validateRadio("[name='WhatMakesUsDifferent']"))
        return setFild("Please select the pre-written message you would like included on the \"What makes us different\" landing page.", $("[name='WhatMakesUsDifferent']"));

    if (!validateRadio("[name='about']"))
        return setFild("Please select the pre-written message you would like included on the 'About " + brand + "' landing page.", $("[name='about']"));

    if (!validateRadio("[name='supportPackage']"))
        return setFild("Please select a support package.", $("[name='supportPackage']"));


    if (!validateEmail(objFrm.email.value)) {
        return setFild("Please enter a valid email address in the\nformat: name@example.com", objFrm.email);
    }

    //Validate security question.
    if (document.getElementById("question").value == "") {
        return setFild("Please answer the security question.", document.getElementById("question"));
    } else {
        if (document.getElementById("question").value != answers[rand]) {
            InitFilter();
            return setFild("The answer to the security question is incorrect.", document.getElementById("question"));
        }
    }
}

function validateRadio(jqSelector) {
    var radios = $(jqSelector);
    if (radios !== "undefined" && radios.length > 0) {
        var selected = $(radios).filter(":checked").length;

        if (selected >= 1)
            return true;
        else
            return false;
    } else {
        return true;
    }
}

function validateCheckbox(jqSelector) {
    var cb = $(jqSelector);
    if (cb !== "undefined" && cb.length > 0) {
        var isChecked = false;
        $(cb).each(function (index, value) {
            if (cb[index].checked)
                isChecked = true;
        });
        return isChecked;
    } else {
        return true;
    }
}

function validateTextbox(textbox, message) {
    if ($.trim(textbox.value) == "") {
        return setFild(message, textbox);
    }
    return true;
}

/**Helper function**/
function addCSSClassRecursively(topElement, CssClass) {
    $(topElement).addClass(CssClass);
    $(topElement).children().each(function () {
        $(this).addClass(CssClass);
        addCSSClassRecursively($(this), CssClass);
    });
}


function getQueryVar(variable) {
    var i
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}
