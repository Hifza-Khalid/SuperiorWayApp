import 'package:flutter/material.dart';
import '../widgets/input_field.dart';
import '../widgets/custom_button.dart';
import 'home_page.dart';
import '../services/auth_service.dart';

class SignInScreen extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          children: [
            InputField(label: "Email", controller: emailController),
            InputField(label: "Password", controller: passwordController, isPassword: true),
            CustomButton(
              text: "Sign In",
              onPressed: () {
                if (AuthService.signIn(emailController.text, passwordController.text)) {
                  Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => HomePage()));
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}
