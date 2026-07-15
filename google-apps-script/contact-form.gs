// Deployed as a Google Apps Script Web App, owned by support.villaazureja@gmail.com,
// bound to the "Villa Azure Contact Submissions" Google Sheet. The site's
// contact form (see src/services/contact.service.ts) POSTs form data here.
//
// Since support.villaazureja@gmail.com owns this script, MailApp.sendEmail
// automatically sends every email below AS that account — no extra config
// needed for the "from" address.
//
// This file is a reference copy for version history — editing it here does
// NOT update the live deployment. To ship a change:
//   1. Paste the updated code into the Apps Script editor (Extensions ->
//      Apps Script, from the Sheet).
//   2. Deploy -> Manage deployments -> edit (pencil icon) -> Version:
//      "New version" -> Deploy. The Web App URL stays the same.

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      new Date(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone || "",
      data.subject,
      data.message,
    ]);

    // Notify the site owner.
    MailApp.sendEmail({
      to: "villaazureja@gmail.com",
      replyTo: data.email,
      subject: "New Contact Form Submission — Villa Azure",
      body:
        "Name: " + data.firstName + " " + data.lastName + "\n" +
        "Email: " + data.email + "\n" +
        "Phone: " + (data.phone || "N/A") + "\n" +
        "Subject: " + data.subject + "\n\n" +
        "Message:\n" + data.message,
    });

    // Send a welcome/auto-reply back to the person who submitted the form.
    // CC'ing the owner puts this exact thread in their own inbox too, so
    // replying to it (from either side) reaches the customer directly —
    // no need to look up their email from the Sheet.
    if (data.email) {
      MailApp.sendEmail({
        to: data.email,
        cc: "villaazureja@gmail.com",
        subject: "Thank You for Reaching Out — Villa Azure",
        body:
          "Hi " + data.firstName + ",\n\n" +
          "Thank you for reaching out to Villa Azure! We've received your message and our team will get back to you within 24 hours.\n\n" +
          "Here's a copy of what you sent us:\n\n" +
          "Subject: " + data.subject + "\n" +
          "Message: " + data.message + "\n\n" +
          "We can't wait to help you plan your stay on Jamaica's beautiful North Coast.\n\n" +
          "Warm regards,\n" +
          "The Villa Azure Team\n" +
          "Paradisiac Beach Club, Richmond, St. Ann, Jamaica",
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
