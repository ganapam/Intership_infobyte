var helpers = ["Your name must be in the form: \n first name, middle initial., last name",
    "Your email address must have the form:\ user@domain",
    "Your Number Must be 10 Digits And Include Country Code ",
    "What Problem U have Tell like query Description",
    "This box provides advice on filling out the form on this page. Put the mouse cursor over any input field to get advice"
]

function messages(adviceNumber) {
    document.getElementById("adviceBox").value = helpers[adviceNumber];
}