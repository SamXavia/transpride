function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sam@transpridesouthampton.org",
        Password : "8D580925A0CC4EF75F871B92B03A61155B7A",
        To : 'sam@vex.blue',
        From : "sam@vex.blue",
        Subject : "NEW! Newletter Subscriber!",
        Body : "Congrats on getting a new email for the newsletter: "
    }).then(
      message => alert(message)
    );
}