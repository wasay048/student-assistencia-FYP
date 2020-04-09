// // Register Form Validation
// $(document).ready(function(){
//     $("#email").keyup(function(){
//         var email = $('#email').val();
//         if(email == ''){
//             $("#emailError").html("<i class='ti-close'></i> Email Field is Required");
//             $('#registerStudentButton').prop('disabled', true);
//         }
//         if(email != ''){
//             $("#emailError").html("");
//             // $('#registerStudentButton').prop('disabled', false);
//         }
        
//     })
//     $("#username").keyup(function(){
//         var username = $("#username").val();
//         if(username == '' || username.length < 5){
//             $("#usernameError").html("<i class='ti-close'></i> Username should be 5 characters long");
//             $('#registerStudentButton').prop('disabled', true);
//         }
//         if(!(username == '' || username.length < 5)){
//             $("#usernameError").html("");
//             // $('#registerStudentButton').prop('disabled', false);
//         }
//     })
//     $("#firstName").keyup(function(){
//         var firstName = $("#firstName").val();
//         if(firstName == ''){
//             $("#firstNameError").html("<i class='ti-close'></i> First Name is required");
//             $('#registerStudentButton').prop('disabled', true);
//         }
//         if(firstName != ''){
//             $("#firstNameError").html("");
//             // $('#registerStudentButton').prop('disabled', false);
//         }
//     })
//     $("#lastName").keyup(function(){
//         var lastName = $("#lastName").val();
//         if(lastName == ''){
//             $("#lastNameError").html("<i class='ti-close'></i> Last Name is required");
//             $('#registerStudentButton').prop('disabled', true);
//         }
//         if(lastName != ''){
//             $("#lastNameError").html("");
//             // $('#registerStudentButton').prop('disabled', false);
//         }
//     })
//     $("#password").keyup(function(){
//         var password = $("#password").val();
//         if(password == '' || password.length < 6){
//             $('#passwordError').html("<i class='ti-close'></i> Password should be longer than 6 characters");
//             $('#registerStudentButton').prop('disabled', true);
//         }
//         if(!(password == '' || password.length < 6)){
//             $('#passwordError').html("");
//             // $('#registerStudentButton').prop('disabled', false);
//         }
//     })
//     var confirmPassword = $('#confirmPassword').val();
//     if(email == '' || username == '' || firstName == '' || lastName == '' || password == '' || confirmPassword == ''){
//         $('#registerStudentButton').prop('disabled', true);
//     }else if(email != '' || username != '' || firstName != '' || lastName != '' || password != '' || confirmPassword != '') {
//         $('#registerStudentButton').prop('disabled', false);  
//     }
//     // $("#confirmPassword").keyup(function(){
//     //     var confirmPassword = $("#confirmPassword").val();
//     //     if(password != confirmPassword){
//     //         $("#confirmPasswordError").html("<span class='Error'><i class='ti-close'></i> Password Didn't Match</span>");
//     //         $('#registerStudentButton').prop('disabled', true);
//     //     }
//     //     if(password == confirmPassword){
//     //         $("#confirmPasswordError").find(span).remove();
//     //         $('#registerStudentButton').prop('disabled', false);
//     //     }
//     // })
//     // $('#registerStudentButton').click(function(){
//     //     if(password != confirmPassword){
//     //         $("#confirmPasswordError").append("<span class='Error'><i class='ti-close'></i> Password Didn't Match</span>");
//     //         $('#registerStudentButton').prop('disabled', true);
//     //     }
//     //     if(password == confirmPassword){
//     //         $("#confirmPasswordError").find(span).remove();
//     //         $('#registerStudentButton').prop('disabled', false);
//     //     }
//     // })
// })