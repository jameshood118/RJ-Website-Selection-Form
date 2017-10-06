<%@  language="vbScript" %>
    <% Option Explicit %>
        <%
Dim sMsg, CurrDateTime, dataEmail, i,x,v, cbLifeEvent, cbServices, cbAbout, siteType, group, homepage, intro, team, cbOurClientsCs, cbClientType, cityTheme, region, ServicesForm, ServicesArray, ClientsForm, ClientsArray, brand, AboutText, NicheShow, TeamContact, HomePageQuote, RequestedPreviewLabel

siteType = CStr(Request("type"))
group = CStr(Request("group"))

if group = "AlexBrown" then
           brand = "Alex Brown"
           AboutText = "About Alex Brown: <br /><b>" & Request.Form("about") & "</b><br /><br />"
else
           brand = "Raymond James"
           AboutText = "About Raymond James: <br /><b>" & Request.Form("about") & "</b><br /><br />"
End If

ServicesForm = Request.Form("services")
ServicesArray = split(ServicesForm,",")

For i = LBound(ServicesArray) to UBound(ServicesArray)
    cbServices = cbServices + ServicesArray(i) + "<br />"
Next

For i = 1 to 100
           If Request.Form("clientType"&i) <> "" Then
            If Request.Form("Niche"&i) = "Yes" Then NicheShow = " - Show in Niche Tile? - <b>Yes</b>" else NicheShow = ""
                cbClientType = cbClientType + "<b>" & Request.Form("clientType"&i) & "</b>" & NicheShow & "<br/>"
        End If
    Next

If Request.Form("HomePage_Quote") = "Custom Quote" Then
    HomePageQuote = "Custom Quote - " & Request.Form("CustomQuote")
        Else
        HomePageQuote = Request.Form("HomePage_Quote")
        End If

Dim Number, NumberData
Number = Replace(Request.Form("Number"), ",", "")
NumberData = Replace(Request.Form("Number"), ",", "")

Dim Billing
	if Request.Form("billing") = "Split FA Blotter" Then
	Billing = "<br/>Billing Information: <b>" & Request.Form("billing") & "</b> - Bill to: " & Number & "<br />"
	Else
	Billing = "<br/>Billing Information: <b>" & Request.Form("billing") & "</b><br />"
	End If

    If Request.Form("TeamMember1") = "" Then
    team = "<em>No Team Members were entered</em><br/>"
        Else
    team = ""
        End If

    For v = 1 to 100
        If Request.Form("TeamMember" & v) <> "" Then
        If Request.Form("TeamMember"& v &"Contact") = "Yes" Then TeamContact = " - Primary Contact? - <b>Yes</b>" else TeamContact = ""
            team = team & "Team " &v & ": <b>" & Request.Form("TeamMember" & v) & "</b>, " & Request.Form("TeamMember"& v &"Title") & " - Delegate? - <b>" & Request.Form("TeamMember"& v &"Delegate") & "</b>" & TeamContact & "<br/>"
        Else
            Exit For
        End If

    Next


 CurrDateTime = Now()

'Build E-mail message bodies dataEmail is for data collection and is pipe delimited
	If siteType = "new" Then
		'Secondary Email body for data archiving
         dataEmail = CurrDateTime & "|" &_
         siteType & "|" &_
         group & "|" &_
         Request.Form("currentConsultant") & "|" &_
         Request.Form("transitionConsultant") & "|" &_
         Request.Form("PrimaryName") & "|" &_
         Request.Form("email") & "|" &_
         Request.Form("mailingAddress1") & "|" &_
         Request.Form("mailingAddress2") & "|" &_
         Request.Form("city") & "|" &_
         Request.Form("state") & "|" &_
         Request.Form("zip") & "|" &_
         Request.Form("phone1") & "|" &_
         Request.Form("phone2") & "|" &_
         Request.Form("fax") & "|" &_
         "|" &_
         "|" &_
         Request.Form("Affiliation") & "|" &_
         Request.Form("ApprovedDBA") & "|" &_
         Request.Form("newStartDt") & "|" &_
         Request.Form("domain") & "|" &_
         Request.Form("domainName") & "|" &_
         Request.Form("ExistingSite") & "|" &_
         team & "|" &_
         Request.Form("billing") & "|" &_
         NumberData & "|" &_
         Request.Form("supportPackage") & "|" &_
         Request.Form("layout") & "|" &_
         Request.Form("theme") & "|" &_
         Request.Form("HomePage_Intro") & "|" &_
         HomePageQuote & "|" &_
         cbClientType & "|" &_
         cbServices & "|" &_
         Request.Form("OurApproach") & "|" &_
         Request.Form("WhatMakesUsDifferent") & "|" &_
         Request.Form("about")

        sMsg =	"<p><html>" & vbCrLf &_
        "Domain: <b>" & brand &"</b><br/>" & vbCrLf &_
        "Approved DBA: <b>" & Request.Form("ApprovedDBA") & "</b><br />" & vbCrLf &_
        "Requested Site Address: <b>" & Request.Form("ExistingSite") & "</b><br />" & vbCrLf &_
        "Start Date: <b>" & Request.Form("newStartDt") & "</b><br />" & vbCrLf &_
        "Do you currently own a custom domain: <b>" & Request.Form("domain") & "</b><br />" & vbCrLf &_
        "Domain Name: <b>" & Request.Form("domainName") & "</b><br />" & vbCrLf &_
        "Template and Color: <b>" & Request.Form("layout") & "</b><br />" & vbCrLf &_
        "Image Theme: <b>" & Request.Form("theme") & "</b><br /><br />" & vbCrLf &_
        "Marketing consultant: <b>" & Request.Form("currentConsultant") & "</b><br />" & vbCrLf &_
        "Transition consultant: <b>" & Request.Form("transitionConsultant") & "</b><br />" & vbCrLf &_
        "Primary Advisor Name: <b>" & Request.Form("PrimaryName") & "</b><br />" & vbCrLf &_
        "Primary Advisor Email: <b>" & Request.Form("email") & "</b><br />" & vbCrLf &_
        "Address 1: <b>" & Request.Form("mailingAddress1") & "</b><br />" & vbCrLf &_
        "Address 2: <b>" & Request.Form("mailingAddress2") & "</b><br />" & vbCrLf &_
        "City: <b>" & Request.Form("city") & "</b><br />" & vbCrLf &_
        "State: <b>" & Request.Form("state") & "</b><br />" & vbCrLf &_
        "Zip code: <b>" & Request.Form("zip") & "</b><br />" & vbCrLf &_
        "Phone 1: <b>" & Request.Form("phone1") & "</b><br />" & vbCrLf &_
        "Phone 2: <b>" & Request.Form("phone2") & "</b><br />" & vbCrLf &_
        "Fax: <b>" & Request.Form("fax") & "</b><br /><br />" & vbCrLf &_
        Billing &_
        "Support Package: <b>" & Request.Form("supportPackage") & "</b><br />" & vbCrLf &_
        "Broker/Dealer Affiliation: <b>" & Request.Form("Affiliation") & "</b><br /><br />" & vbCrLf &_
        team & "<br />" & vbCrLf &_
        "Homepage Intro: <br /><b>" & Request.Form("HomePage_Intro") & "</b><br /><br />" & vbCrLf &_
        "Homepage Quote: <br /><b>" & HomePageQuote & "</b><br /><br />" & vbCrLf &_
        "Our Approach: <br /><b>" & Request.Form("OurApproach") & "</b><br /><br />" & vbCrLf &_
        "What Makes Us Different: <br /><b>" & Request.Form("WhatMakesUsDifferent") & "</b><br /><br />" & vbCrLf &_
        AboutText &_
        "Our Clients: <br />" & cbClientType & "<br />" & vbCrLf &_
        "Services: <br /><b>" & cbServices & "</b><br />" & vbCrLf &_
        "</p>" & vbCrLf &_
        "</html>"
    Else

     dataEmail = CurrDateTime & "|" &_
     siteType & "|" &_
     group & "|" &_
     Request.Form("preview") & "|" &_
     "|" &_
     "|" &_
     Request.Form("PrimaryName") & "|" &_
     Request.Form("email") & "|" &_
     "|" &_
     "|" &_
     "|" &_
     "|" &_
     "|" &_
     "|" &_
     "|" &_
     "|" &_
     Request.Form("FaNum") & "|" &_
     Request.Form("Branch") & "|" &_
     Request.Form("Affiliation") & "|" &_
     Request.Form("ApprovedDBA") & "|" &_
     "|" &_
     "|" &_
     "|" &_
     Request.Form("ExistingSite") & "|" &_
     team & "|" &_
     Request.Form("billing") & "|" &_
     NumberData & "|" &_
     Request.Form("supportPackage") & "|" &_
     Request.Form("layout") & "|" &_
     Request.Form("theme") & "|" &_
     Request.Form("HomePage_Intro") & "|" &_
     HomePageQuote & "|" &_
     cbClientType & "|" &_
     cbServices & "|" &_
     Request.Form("OurApproach") & "|" &_
     Request.Form("WhatMakesUsDifferent") & "|" &_
     Request.Form("about")

        sMsg =	"<html><p>" & vbCrLf &_
"Requested Preview: <b>" & Request.Form("preview") & "</b><br />" & vbCrLf &_
"Domain: <b>" & brand &"</b><br/>" & vbCrLf &_
"Approved DBA: <b>" & Request.Form("ApprovedDBA") & "</b><br />" & vbCrLf &_
"Existing Site: <b>" & Request.Form("ExistingSite") & "</b><br />" & vbCrLf &_
"Template and Color: <b>" & Request.Form("layout") & "</b><br />" & vbCrLf &_
"Image Theme: <b>" & Request.Form("theme") & "</b><br /><br />" & vbCrLf &_
"Primary Advisor Name: <b>" & Request.Form("PrimaryName") & "</b><br />" & vbCrLf &_
"Primary Advisor Email: <b>" & Request.Form("email") & "</b><br />" & vbCrLf &_
"Primary Advisor FA Number: <b>" & Request.Form("FaNum") & "</b><br />" & vbCrLf &_
Billing &_
"Support Package: <b>" & Request.Form("supportPackage") & "</b><br />" & vbCrLf &_
"Branch Number: <b>" & Request.Form("Branch") & "</b><br />" & vbCrLf &_
"Broker/Dealer Affiliation: <b>" & Request.Form("Affiliation") & "</b><br /><br />" & vbCrLf &_
team & "<br />" & vbCrLf &_
"Homepage Intro: <br /><b>" & Request.Form("HomePage_Intro") & "</b><br /><br />" & vbCrLf &_
"Homepage Quote: <br /><b>" & HomePageQuote & "</b><br /><br />" & vbCrLf &_
"Our Approach: <br /><b>" & Request.Form("OurApproach") & "</b><br /><br />" & vbCrLf &_
"What Makes Us Different: <br /><b>" & Request.Form("WhatMakesUsDifferent") & "</b><br /><br />" & vbCrLf &_
AboutText &_
"Our Clients:  <br />" & cbClientType & "<br />" & vbCrLf &_
"Services: <br /><b>" & cbServices & "</b><br />" & vbCrLf &_
"</p>" & vbCrLf &_
"</html>"

	End If


'**** EMAIL start *****

Dim errMsg, boolStamp, errMsg2, boolStamp2, errMsg3, boolStamp3, errMsg4, boolStamp4, objMailer, objMailer2, objMailer3, objMailer4, subject, subject2, subject3, subject4, recipient(1), recipient2(1), recipient3(1), recipient4(1), FullErrorMessage, FullErrorMessageFromData

boolStamp = Null
errMsg = ""
FullErrorMessage = ""


boolStamp2 = Null
errMsg2 = ""
FullErrorMessageFromData = ""

boolStamp3 = Null
errMsg3 = ""

boolStamp4 = Null
errMsg4 = ""

Dim boolDev, domain
domain = Request.ServerVariables("SERVER_NAME")
If InStr(domain, "apwxa") > 0 Then
    boolDev = true
Else
    boolDev = false
End If

'Check To Make sure the Submit Button was used and not posting from different location
If Request.Form("submitBtn") = "Submit" Then
	Set objMailer = CreateObject("MailRemote.Mailer")
	objMailer.FromName = CStr(Request.Form("fname")) & " " & CStr(Request.Form("lname"))

	'Check to make sure that the e-mail field was passed and is not EMPTY. If it is EMPTY set from address as unknown@raymondjames.com
	If Request.Form("email") = "" Then
		objMailer.FromAddress = "unknown@raymondjames.com"
	Else
		objMailer.FromAddress = CStr(Request.Form("email"))
	End If
    
    If Request.Form("preview") = "Yes" Then
    RequestedPreviewLabel = "#Requested_Preview"
    Else
    RequestedPreviewLabel = ""
    End If

    'build subject line
    If siteType = "new" And  group = "transitioning" Then
        subject = "New Website Form "& chr(45) &" Transitioning"
        subject2 = "Website Selection Form Data"
        recipient(0) = "Web Services"
        recipient(1) = "webservices@raymondjames.com"
    ElseIf siteType = "new" And  group = "rjfs_rja" Then
        subject = "New Website Form "& chr(45) &" RJA + RJFS"
        subject2 = "Website Selection Form Data"
        recipient(0) = "Web Services"
        recipient(1) = "webservices@raymondjames.com"
    ElseIf siteType = "new" And  group = "iad_corr" Then
        subject = "New Website Form "& chr(45) &" IAD + CORR"
        subject2 = "Website Selection Form Data"
        recipient(0) = "Web Services"
        recipient(1) = "webservices@raymondjames.com"
    ElseIf siteType = "new" Then
        subject = "New Website Form "
        subject2 = "Website Selection Form Data"
        recipient(0) = "Web Services"
        recipient(1) = "webservices@raymondjames.com"
    ElseIf siteType = "sc7" Then
        subject = "Advisor Website Migration (SC7) Form "& chr(45) & " " & group
        subject2 = "SC7 Website Selection Form Data"
        recipient(0) = "Web Services"
        recipient(1) = "webservices@raymondjames.com"
        subject4 = Request.Form("email") &" "& RequestedPreviewLabel
        recipient4(0) = "Trello Migrations Board"
        recipient4(1) = "raymondjameswebservices+n5agttpfuirk3vulbghv@boards.trello.com"
    ElseIf siteType = "csfree" Then
        subject = "Advisor Website Migration (CSFREE) Form "& chr(45) & " " & group
        subject2 = "Website Selection Form Data"
        recipient(0) = "Web Services"
        recipient(1) = "webservices@raymondjames.com"
        subject4 = Request.Form("email")
        recipient4(0) = "Trello Migrations Board"
        recipient4(1) = "raymondjameswebservices+vymptokfhfgqikukorym@boards.trello.com"
    Else
        subject = "Advisor Website Migration "& chr(45) & " " & group
        subject2 = "Website Selection Form Data"
        recipient(0) = "Web Services"
        recipient(1) = "webservices@raymondjames.com"
        subject4 = Request.Form("email")
        recipient4(0) = "Trello Migrations Board"
        recipient4(1) = "raymondjameswebservices+vymptokfhfgqikukorym@boards.trello.com"

	End If
    'If boolDev Then
     'objMailer.AddRecipient "James Hood", "James.Hood@raymondjames.com"
      'objMailer.Subject = "***TEST*** "&subject&" ***TEST***"
    'Else
	    'Set the name and e-mail address of who will receive the email. You can also use AddCC and AddBCC or additional AddRecipient to send the e-mail to multiple people.
        objMailer.AddRecipient CStr(recipient(0)), CStr(recipient(1))
        objMailer.Subject = subject
    'End If

	'Set the subject line. Best practice is to include the name of the website or main domain name. This way Recipients are aware where the form originated.

	'Set the body message to what was built above.
	objMailer.BodyText = sMsg

	'Check to see if the e-mail was passed to the Mail Mover program. This DO NOT check to see if the e-mail was actually sent.
	If Not objMailer.SendMail Then
		'If the email was NOT passed to the Mail Mover program then set boolStamp to false and errMsg to error message for later.
		boolStamp = False
		errMsg = objMailer.Response
        FullErrorMessage = objMailer.Response
	Else
		'If the email was passed to the Mail Mover program then set boolStamp to true and errMsg to EMPTY for later.
		boolStamp = True
		errMsg = ""
	End if

	'Release the object to free up system resources.
	Set objMailer = Nothing
End If
'**** Data EMAIL start *****
'Check To Make sure the Submit Button was used and not posting from different location
If Request.Form("submitBtn") = "Submit" Then
    Set objMailer2 = CreateObject("MailRemote.Mailer")
    objMailer2.FromName = CStr(Request.Form("fname")) & " " & CStr(Request.Form("lname"))


	'Check to make sure that the e-mail field was passed and is not EMPTY. If it is EMPTY set from address as unknown@raymondjames.com
	If Request.Form("email") = "" Then
		objMailer2.FromAddress = "unknown@raymondjames.com"
	Else
		objMailer2.FromAddress = "websitemigration@raymondjames.com"
	End If

    recipient2(0) = "Raymond James Enhanced Advisor Websites"
    recipient2(1) = "websitemigration@raymondjames.com"

    objMailer2.AddRecipient CStr(recipient2(0)), CStr(recipient2(1))
    objMailer2.Subject = subject2


	'Set the subject line. Best practice is to include the name of the website or main domain name. This way Recipients are aware where the form originated.

	'Set the body message to what was built above.

    objMailer2.BodyText = dataEmail


	'Check to see if the e-mail was passed to the Mail Mover program. This DO NOT check to see if the e-mail was actually sent.
	If Not objMailer2.SendMail Then
		'If the email was NOT passed to the Mail Mover program then set boolStamp to false and errMsg to error message for later.
		boolStamp2 = False
		errMsg2 = objMailer2.Response
        FullErrorMessageFromData = objMailer.Response
	Else
		'If the email was passed to the Mail Mover program then set boolStamp to true and errMsg to EMPTY for later.
		boolStamp2 = True
		errMsg2 = ""
	End if

	'Release the object to free up system resources.
	Set objMailer2 = Nothing
End If
'**** Error EMAIL start *****

If FullErrorMessageFromData <> "" OR FullErrorMessage <> "" Then

    ErrorMessageBody = "<html>" & vbCrLf &_
        "<p>Whos Form was it?: <b>" & Request.Form("PrimaryName") & "</b></p><br />" & vbCrLf &_
        "<p>Whos Form was it?: <b>" & Request.Form("email") & "</b></p><br />" & vbCrLf &_
        "<p>Website Selection Form Email Errors: <b>" & FullErrorMessage & "</b></p><br /><br />" & vbCrLf &_
        "<p>Website Selection Form Data Email Errors: <b>" & FullErrorMessageFromData & "</b></p><br /><br />" & vbCrLf &_
		"</html>"

    Set objMailer3 = CreateObject("MailRemote.Mailer")
    objMailer3.FromName = CStr(Request.Form("fname")) & " " & CStr(Request.Form("lname"))


	'Check to make sure that the e-mail field was passed and is not EMPTY. If it is EMPTY set from address as unknown@raymondjames.com
	If Request.Form("email") = "" Then
		objMailer3.FromAddress = "unknown@raymondjames.com"
	Else
		objMailer3.FromAddress = "websitemigration@raymondjames.com"
	End If

    subject3 = "Website Selection Form ERRORS"
    recipient2(0) = "James Hood"
    recipient2(1) = "james.hood@raymondjames.com"

    objMailer3.AddRecipient CStr(recipient3(0)), CStr(recipient3(1))
    objMailer3.Subject = subject3


	'Set the subject line. Best practice is to include the name of the website or main domain name. This way Recipients are aware where the form originated.

	'Set the body message to what was built above.

    objMailer3.BodyText = ErrorMessageBody


	'Check to see if the e-mail was passed to the Mail Mover program. This DO NOT check to see if the e-mail was actually sent.
	If Not objMailer3.SendMail Then
		'If the email was NOT passed to the Mail Mover program then set boolStamp to false and errMsg to error message for later.
		boolStamp3 = False
		errMsg3 = objMailer2.Response
	Else
		'If the email was passed to the Mail Mover program then set boolStamp to true and errMsg to EMPTY for later.
		boolStamp3 = True
		errMsg3 = ""
	End if

	'Release the object to free up system resources.
	Set objMailer3 = Nothing
End If

'**** Trello Email Start ****
If siteType <> "new" Then
If Request.Form("submitBtn") = "Submit" Then
    Set objMailer4 = CreateObject("MailRemote.Mailer")
    objMailer4.FromName = CStr(Request.Form("fname")) & " " & CStr(Request.Form("lname"))


	'Check to make sure that the e-mail field was passed and is not EMPTY. If it is EMPTY set from address as unknown@raymondjames.com
	If Request.Form("email") = "" Then
		objMailer4.FromAddress = "unknown@raymondjames.com"
	Else
		objMailer4.FromAddress = "webservices@raymondjames.com"
	End If

    objMailer4.AddRecipient CStr(recipient4(0)), CStr(recipient4(1))
    objMailer4.Subject = subject4


	'Set the subject line. Best practice is to include the name of the website or main domain name. This way Recipients are aware where the form originated.

	'Set the body message to what was built above.

    objMailer4.BodyText = sMsg


	'Check to see if the e-mail was passed to the Mail Mover program. This DO NOT check to see if the e-mail was actually sent.
	If Not objMailer4.SendMail Then
		'If the email was NOT passed to the Mail Mover program then set boolStamp to false and errMsg to error message for later.
		boolStamp4 = False
	Else
		'If the email was passed to the Mail Mover program then set boolStamp to true and errMsg to EMPTY for later.
		boolStamp4 = True
		errMsg4 = ""
	End if

	'Release the object to free up system resources.
	Set objMailer4 = Nothing
End If
End If
%>

            <!DOCTYPE html>
            <html lang="en">

            <head>
                <!-- meta information begin -->
                <title></title>
                <meta name="keywords" content="raymond james website order form" />
                <meta name="description" content="Raymond James Website Order Form" />
                <meta http-equiv="x-ua-compatible" content="IE=Edge"/>
                <!-- meta information end -->
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
                <style type="text/css">
                    /* On Page Styles */

                    .cluetip-default h3.cluetip-title {
                        color: #ffffff;
                        font-weight: bold;
                        background-color: #cccccc;
                        padding: 3px;
                    }

                    .cluetip-outer {
                        background-color: #eeeeee;
                        font-family: Arial;
                    }

                    .cluetip-inner {
                        padding: 5px;
                    }

                    .hidden {
                        display: none;
                    }

                    textarea {
                        width: 920px;
                        overflow: auto;
                        height: 100px;
                    }

                    #tblColorTheme.regTbl td,
                    #tblLayout.regTbl td,
                    #tblImage.regTbl td {
                        text-align: center;
                        vertical-align: top;
                    }

                    #tblImage.regTbl td img {
                        vertical-align: top;
                        width: 15px;
                        max-height: 100px;
                    }

                </style>
                <!-- top styles and scripts begin -->
                <link href="style2.css" rel="Stylesheet" />
                <style type="text/css" media="all" title="Stylemain">
                    p.pr {
                        line-height: 15px;
                        margin-bottom: 14px;
                        margin-left: 50px;
                        text-indent: -48px;
                    }

                    p.pr a:link,
                    p.pr a:visited {
                        font-weight: bold !important;
                    }

                    #largePic {
                        position: fixed;
                        left: 95px;
                        top: 5px;
                        z-index: 5;
                    }

                    #copyright {
                        font-size: 1rem;
                    }

                    #bd_disc {
                        font-size: 1rem;
                    }

                    #logo {
                        text-align: center;
                    }

                    tbody tr td {
                        padding: 10px;
                    }

                </style>

                <%
        Response.Write("<script type='text/javascript' >var group =  '"+ group +"'; var type = '"+ siteType +"';</script>")
    %>
                    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>
                    <script type="text/javascript" src="/js_beg07.js"></script>
                    <script type="text/javascript">
                        window.onload = function() {
                            setValues();
                        }

                        //set values for the form based on group and type.
                        function setValues() {
                            switch (type) {
                                case "new":
                                    if (group == "transitioning") {
                                        $("title").html("Raymond James Transitioning Advisor Website Order Form");
                                        $("#mainTitle").html("Raymond James Transitioning Advisor Website Order Form");
                                    } else if (group == "rja_rjfs") {
                                        $("title").html("Advisor Website Order Form");
                                        $("#mainTitle").html("Advisor Website Order Form");
                                    } else {
                                        $("title").html("Advisor Website Order Form");
                                        $("#mainTitle").html("Advisor Website Order Form");
                                    }
                                    break;
                                case "SC7":
                                    $("title").html("Advisor Website Migration (SC7) Form");
                                    $("#mainTitle").html("Advisor Website Migration (SC7) Form");
                                    break;
                                default:
                                    $("title").html("Advisor Website Order Form");
                                    $("#mainTitle").html("Advisor Website Order Form");
                                    break;
                            }
                            var d = new Date();
                            var CopyrightYear = d.getFullYear();
                            $('#copyright').html('<span id="ratePageDis"><img src="/images/build07/clear.gif" id="text_size_lg" width="16" height="15" alt="" /></span><span id="textSizer"></span><br /> &copy; ' + CopyrightYear + ' Raymond James Financial, Inc. All rights reserved.');
                        }

                    </script>
                    <!-- top styles and scripts end -->

            </head>

            <body>
                <div id="grand">
                    <table width="990" border="0" cellspacing="0" cellpadding="0" id="main">
                        <col id="main_col_1" />
                        <col id="main_col_2" />
                        <col id="main_col_3" />
                        <!-- header begin -->
                        <tr>
                            <td colspan="3" id="toprow">
                                <div id="logo">
                                    <a title="Raymond James Home" href="/index.htm">
                                        <img src="/images/build07/logo.gif" width="212" height="48" alt="Raymond James" /></a>
                                </div>
                            </td>
                        </tr>
                        <!-- header end -->
                        <tr id="content_area_row">
                            <td valign="top" id="body_content_cell">
                                <div id="body_content_wide">
                                    <!-- content begin -->

                                    <h2 id="mainTitle">Raymond James Transitioning Advisor Website Order Form</h2>
                                    <br>
                                    <br>
                                    <br>
                                    <div align="left">
                                        <%
'Check boolStamp for True and if so then post SUCCESS message.
If boolStamp Then
%>
                                            <p>Success! Your request has been sent to Raymond James Web Services.</p>
                                            <p>We will begin work on your new website shortly. If you had any questions, you can email us at <a href="webservices@raymondjames.com">webservices@raymondjames.com</a> or call 727-567-5423 (or ext. 75423).</p>


                                            <%
'Check boolStamp for False and if so then post ERROR message. Be sure to set the e-mail address in case of an issue.
Else
%>
                                                <p><b>Error!</b> There was a problem sending your message.</p>
                                                <p>Please press the back button on your browser and try to re-submit the form.</p>
                                                <p>We apologize for this issue. Please use this link to e-mail us directly.</p>
                                                <p><a href="mailto:webservices@raymondjames.com">webservices@raymondjames.com</a></p>
                                    </div>
                                    <% End If
%>
                                        <!-- content end -->
                                        <div id="mcol_spacer"></div>
                            </td>
                            <!-- middle column end -->
                            <!-- right column begin -->
                        </tr>
                        <!-- right column end -->
                        <!-- footer begin -->
                        <tr id="footer_row">
                            <td colspan="3" valign="bottom" id="footer_cell">
                                <div id="copyright"></div>
                            </td>
                        </tr>
                    </table>
                    <div id="bd_disc">Raymond James &amp; Associates, Inc. member <a href="http://www.nyse.com" target="_blank" style="">New York Stock Exchange</a> / <a href="http://www.sipc.org" target="_blank">SIPC</a> and Raymond James Financial Services, Inc. member <a href="http://www.finra.org" target="_blank">FINRA</a> / <a href="http://www.sipc.org" target="_blank">SIPC</a> are subsidiaries of Raymond James Financial, Inc.</div>
                    <!-- footer end -->
                    <!-- bottom scripts begin -->
                    <script type="text/javascript">
                        <!--
                        // set the nav background
                        var horiz_bkg = ""
                        -->

                    </script>
                    <!-- <script type="text/javascript" src="/js_end07.js"></script> -->
                    <!-- bottom scripts end -->
                    </div>
                </div>
            </body>

            </html>
