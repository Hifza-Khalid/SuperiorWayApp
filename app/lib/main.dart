import 'package:flutter/material.dart';
import 'utils/app_colors.dart';
import 'screens/splash_screen.dart';
import 'screens/sign_in.dart';
import 'screens/home_page.dart';

void main() {
  runApp(SuperiorWayApp());
}

class SuperiorWayApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SuperiorWay Transport',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: AppColors.primary),
      home: SplashScreen(),
    );
  }
}
