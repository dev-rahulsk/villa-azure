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
      body: ownerPlainText_(data),
      htmlBody: ownerHtml_(data),
    });

    // Send a welcome/auto-reply back to the person who submitted the form.
    // CC'ing the owner puts this exact thread in their own inbox too, so
    // replying to it (from either side) reaches the customer directly —
    // no need to look up their email from the Sheet.
    if (data.email) {
      MailApp.sendEmail({
        to: data.email,
        subject: "Thank You for Reaching Out — Villa Azure",
        body: customerPlainText_(data),
        htmlBody: customerHtml_(data),
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

/* ---------------------------------------------------------------------- *
 * Brand-styled email templates
 * Palette: navy #0e2c50, gold #bf9a5a, cream #f7f3ec, wash #eef4fa
 * Headings font stack falls back to Georgia since most mail clients
 * (Gmail, Outlook) don't load Google Fonts like Cormorant Garamond.
 * ---------------------------------------------------------------------- */

function escapeHtml_(str) {
  return String(str || "").replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function nl2br_(str) {
  return escapeHtml_(str).replace(/\n/g, "<br>");
}

function emailShell_(preheader, bodyHtml) {
  return (
    '<!doctype html>' +
    '<html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>Villa Azure</title>' +
    '</head>' +
    '<body style="margin:0;padding:0;background-color:#f7f3ec;">' +
    '<div style="display:none;max-height:0;overflow:hidden;opacity:0;">' + escapeHtml_(preheader) + '</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f3ec;padding:32px 16px;">' +
    '<tr><td align="center">' +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;">' +

      // Gold rule
      '<tr><td style="background-color:#ffffff;padding:0;"><div style="height:3px;line-height:3px;background-color:#bf9a5a;font-size:0;">&nbsp;</div></td></tr>' +

      // Body
      '<tr><td style="background-color:#ffffff;padding:40px 40px;">' +
        bodyHtml +
      '</td></tr>' +

      // Footer
      '<tr><td style="background-color:#0e2c50;padding:24px 24px;text-align:center;">' +
        '<div style="font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#c9d3de;line-height:1.6;">' +
          'Paradisiac Beach Club, Richmond, St. Ann, Jamaica<br>' +
          '<a href="mailto:villaazureja@gmail.com" style="color:#bf9a5a;text-decoration:none;">villaazureja@gmail.com</a>' +
        '</div>' +
      '</td></tr>' +

    '</table>' +
    '</td></tr>' +
    '</table>' +
    '</body></html>'
  );
}

function detailRow_(label, value) {
  return (
    '<tr>' +
      '<td style="padding:10px 0;border-bottom:1px solid #eef4fa;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#bf9a5a;width:120px;vertical-align:top;">' + escapeHtml_(label) + '</td>' +
      '<td style="padding:10px 0;border-bottom:1px solid #eef4fa;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#0e2c50;vertical-align:top;">' + value + '</td>' +
    '</tr>'
  );
}

function ownerHtml_(data) {
  var body =
    '<div style="font-family:Georgia,\'Times New Roman\',serif;font-size:22px;color:#0e2c50;text-align:center;">New Contact Form Submission</div>' +
    '<div style="width:56px;height:2px;background-color:#bf9a5a;margin:14px auto 24px;font-size:0;">&nbsp;</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' +
      detailRow_('Name', escapeHtml_(data.firstName) + ' ' + escapeHtml_(data.lastName)) +
      detailRow_('Email', '<a href="mailto:' + escapeHtml_(data.email) + '" style="color:#0e2c50;">' + escapeHtml_(data.email) + '</a>') +
      detailRow_('Phone', escapeHtml_(data.phone || 'N/A')) +
      detailRow_('Subject', escapeHtml_(data.subject)) +
    '</table>' +
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#bf9a5a;margin:24px 0 8px;">Message</div>' +
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;color:#0e2c50;background-color:#eef4fa;padding:18px 20px;">' +
      nl2br_(data.message) +
    '</div>';
  return emailShell_('New contact form submission from ' + data.firstName + ' ' + data.lastName, body);
}

function customerHtml_(data) {
  var body =
    '<div style="font-family:Georgia,\'Times New Roman\',serif;font-style:italic;font-size:28px;color:#2f6fb0;text-align:center;">Thank You</div>' +
    '<div style="font-family:Georgia,\'Times New Roman\',serif;font-size:22px;color:#0e2c50;text-align:center;margin-top:4px;">For Reaching Out</div>' +
    '<div style="width:56px;height:2px;background-color:#bf9a5a;margin:14px auto 28px;font-size:0;">&nbsp;</div>' +
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#3a4550;">' +
      '<p style="margin:0 0 16px;">Hi ' + escapeHtml_(data.firstName) + ',</p>' +
      '<p style="margin:0 0 16px;">Thank you for reaching out to Villa Azure! We\'ve received your message and our team will get back to you within 24 hours.</p>' +
      '<p style="margin:0 0 8px;">Here\'s a copy of what you sent us:</p>' +
    '</div>' +
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;color:#0e2c50;background-color:#eef4fa;padding:18px 20px;margin:8px 0 24px;">' +
      '<strong>Subject:</strong> ' + escapeHtml_(data.subject) + '<br><br>' +
      nl2br_(data.message) +
    '</div>' +
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#3a4550;">' +
      '<p style="margin:0 0 16px;">We can\'t wait to help you plan your stay on Jamaica\'s beautiful North Coast.</p>' +
      '<p style="margin:0;">Warm regards,<br>The Villa Azure Team</p>' +
    '</div>';
  return emailShell_('Thank you for contacting Villa Azure', body);
}

function ownerPlainText_(data) {
  return (
    "Name: " + data.firstName + " " + data.lastName + "\n" +
    "Email: " + data.email + "\n" +
    "Phone: " + (data.phone || "N/A") + "\n" +
    "Subject: " + data.subject + "\n\n" +
    "Message:\n" + data.message
  );
}

function customerPlainText_(data) {
  return (
    "Hi " + data.firstName + ",\n\n" +
    "Thank you for reaching out to Villa Azure! We've received your message and our team will get back to you within 24 hours.\n\n" +
    "Here's a copy of what you sent us:\n\n" +
    "Subject: " + data.subject + "\n" +
    "Message: " + data.message + "\n\n" +
    "We can't wait to help you plan your stay on Jamaica's beautiful North Coast.\n\n" +
    "Warm regards,\n" +
    "The Villa Azure Team\n" +
    "Paradisiac Beach Club, Richmond, St. Ann, Jamaica"
  );
}
