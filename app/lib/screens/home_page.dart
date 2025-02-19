import 'package:flutter/material.dart';
import 'attendance_page.dart';
import 'fee_payment_page.dart';
import 'bus_schedule_page.dart';
import 'profile_page.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Home")),
      body: Column(
        children: [
          ListTile(title: Text("Attendance"), onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context) => AttendancePage()))),
          ListTile(title: Text("Fee Payment"), onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context) => FeePaymentPage()))),
          ListTile(title: Text("Bus Schedule"), onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context) => BusSchedulePage()))),
          ListTile(title: Text("Profile"), onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context) => ProfilePage()))),
        ],
      ),
    );
  }
}
