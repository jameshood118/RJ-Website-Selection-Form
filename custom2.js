var brand;
var type;
var group;
var clients;

$(function () {
    //Set Initial value of delegates to no
    $(".teamdelegate").val("No");

    $("input:radio[name=billing]").click(function () {
        billingSelection();
    });

    $("input:radio[name=HomePage_Quote]").click(function () {
        quoteSelection();
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

    //New Types added to streamline forms
    addCSSClassRecursively($(".migration"), "migration");
    addCSSClassRecursively($(".transition"), "transition");

    type = getQueryVar("type");
    group = getQueryVar("group");



    $("#frmName").attr("action", "process2.asp?" + "type=" + type + "&group=" + group);

    //Remove all elements that do not have the relavent css class.
    //Removing to assist with validation rather than having to determine which elements are relavent.
    //Do the thing! Show specific elements based on the group type, also hides specific things too
    // 7/18/2017 Adding 3 new form types for the future requirements of having streamlined forms, new, transition and migration

    //Group Validation, do not show form for anything but group 0, 1, 2, 3, 99 or rjfsfree for SC7 form
    if (type == "sc7") {
        switch (group) {
            case "group0":
                break;
            case "group1":
                break;
            case "group2":
                $(".RequestedPreview").show();
                break;
            case "group3":
                $(".RequestedPreview").show();
                break;
            case "group99":
                $(".RequestedPreview").show();
                break;
            case "rjfsfree":
                $(".RequestedPreview").show();
                break;
            default:
                //Show an "Error" if they tried to go to anything except the preapproved SC7 groups, this validation only applies to SC7 forms
                document.title = "This is an error page";
                $("h1")[0].innerText = "This is an error page";
                $("#frmName").empty();
                $("#pContact").html("You have reached this page in error, please contact <a href='mailto:webservices@raymondjames.com' id='aContact'>Web Services</a> at ext. 75423");
                break;
        }
    }

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
                $(".ExistingSite").html("Existing Site Address (if any)");
                $("h1")[0].innerText = "New Website Setup Form";
                document.title = "New Website Setup Form";
            }

            if (group == "iad_corr") {
              $(".AboutRJ").hide();
            }

            $("#pContact").html(" For questions or comments about this form please contact <a href=\"mailto:webservices@raymondjames.com?subject=New Website - " + group + "\">webservices@raymondjames.com</a> or call extension 75423.");
            $(".OurApproach_Migration").remove();
            $(".OurApproach_New").show();
            $(".WhatMakesUsDifferent_Migration").remove();
            $(".WhatMakesUsDifferent_New").show();
            $(".CustomQuote").show();
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option>');
            $(".spanCustomQuote").empty().append("<br/>");
            break;

        case "transition":
            $("#frmName").find(":not(.transitioning, .all)").remove().end().hide();
            $("h1")[0].innerText = "New Website Setup Form (Transitioning Advisors)";
            document.title = "New Website Setup Form (Transitioning Advisors)";
            $(".SetUpFee").empty().append("The cost to setup the website is $350.");
            break;

        case "migration":
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
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option><option value="Use_Current">Use My Current Theme</option>');
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
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option><option value="Use_Current">Use My Current Theme</option>');
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
            $('.theme').prepend('<option value="Nothing" selected>Select an image theme</option><option value="Use_Current">Use My Current Theme</option>');
            break;
    }

    //SC7 Validation: Group numbers, Live Validation for Niche Tiles, Team Member primary contact, done this way because they can only select one, but a radio button will not work correctly with the ASP processor
    $('input.NicheSelect[type="checkbox"]').change(function (e) {
        var num_checked = $('input.NicheSelect[type="checkbox"]:checked').length;
        if (num_checked > 6) {
            alert("You may select no more than 6 Client Groups to appear in the Niche Tile");
            $("[name='clientType']").focus();
            $(e.target).prop("checked", false);
        }
    });

    //Show the niche options for client types
    //additionally clicking on a client type will check the corresponding niche tile, up to 6 automatically.
    $(".clientType").change(function () {
        if ($('input.NicheSelect[type="checkbox"]:checked').length < 6) {
            $(this).parent().parent().toggleClass("ClientsSlide").find("div.nichebox").slideToggle().find("input").prop("checked", true);
        } else {
            $(this).parent().parent().toggleClass("ClientsSlide").find("div.nichebox").slideToggle();
        }
        if ($(this).prop("checked") == false) {
            $(this).parent().parent().removeClass("ClientsSlide").find("div.nichebox").slideUp().find("input").prop("checked", false);
        } else {}

    });

    $("input[name=preview]").click(function () {
        if ($(".PreviewSelected").val() == "Yes" && $(".PreviewSelected").is(':checked')) {
            $(".previewselected").toggleClass("PreviewsSlide").slideToggle();
        } else {
			$(".previewselected").removeClass("PreviewsSlide").slideUp().find("input").prop("checked", false);

        }
    });

    //Validation for Primary contact on team members, only allowing for 1 single primary contact to be selected
    $('input.TeamContact[type="checkbox"]').click(function (e) {
        $('.TeamContact').not(this).attr('checked', false);
    });

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

function quoteSelection() {
    var selectedQuote = $("input[type='radio'][name='HomePage_Quote']:checked");

    switch (selectedQuote.val()) {
        case "Custom Quote":
            $(".spanCustomQuote").empty().append('<input type="text" name="CustomQuote" class="textField requiredField form-control" style="margin-bottom:5px;"/><br/>');
            break;
        default:
            $(".spanCustomQuote").empty().append("<br/>");
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
    var html = "<div><label style='padding-right:15px'> " + cnt + ". </label><input type='text' name='TeamMember" + cnt + "' style='width: 300px' class='textField form-control' />&nbsp;&nbsp;<input type='text' name='TeamMember" + cnt + "Title' style='width: 250px' class='textField form-control' /> <select name='TeamMember" + cnt + "Delegate' class='form-control teamdelegate'><option value='Yes'>Yes</option><option value='No' selected>No</option></select><input type='checkbox' name='TeamMember" + cnt + "Contact' value='Yes' class='TeamContact' /></div>";

    $("div.TeamContainer div:last-child").after(html);

    $('input.TeamContact[type="checkbox"]').click(function (e) {
        $('.TeamContact').not(this).attr('checked', false);
    });
}


function validateForm(objFrm) {

    if ($(".PreviewSelected").val() == "Yes" && $(".PreviewSelected").is(':checked')) {
        if (!validateCheckbox(".previewbox")) {
            return setFild("Please agree to the terms of receiving a preview of your site.", $(".previewbox"))
        }
    } else {}

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

    if (!validateRadio("[name='HomePage_Quote']"))
        return setFild("Please select a home page quote", $("[name='HomePage_Quote']"));

    if ($('input.NicheSelect[type="checkbox"]:checked').length <= "6") {} else {
        return setFild("You may select no more than 6 Client Groups to appear in the Niche Tile", $("[name='clientType']"));
    }

    if (!validateCheckbox(".clientType"))
        return setFild("Please select the client groups you would like included in your site.", $(".clientType"));

    if (!validateCheckbox("[name='services']"))
        return setFild("Please select the services you would like included in your site.", $("[name='services']"));

    if (!validateRadio("[name='OurApproach']"))
        return setFild("Please select the pre-written you would like included on the \"Our Approach\" landing page.", $("[name='OurApproach']"));

    if (!validateRadio("[name='WhatMakesUsDifferent']"))
        return setFild("Please select the pre-written message you would like included on the \"What makes us different\" landing page.", $("[name='WhatMakesUsDifferent']"));

    if (!validateRadio("[name='about']") && group != "iad_corr")
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
        if (document.getElementById("question").value.toLowerCase() != answers[rand]) {
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
