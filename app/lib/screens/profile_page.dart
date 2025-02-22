import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile"),
        backgroundColor: Colors.blue[900],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Header Section
            Container(
              color: Colors.blue[900],
              padding: const EdgeInsets.all(20),
              child: Column(
                children: [
                  CircleAvatar(
                    radius: 40,
                    backgroundImage: AssetImage('assets/profile_picture.png'), // Replace with user's image
                  ),
                  const SizedBox(height: 10),
                  const Text(
                    "Hifza Khalid",
                    style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const Text(
                    "SU92-BSSEM-F22-202",
                    style: TextStyle(color: Colors.white70),
                  ),
                  const Text(
                    "Faculty of Computer Science and IT - GCL",
                    style: TextStyle(color: Colors.white70),
                  ),
                  const SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      profileInfoCard("Under Graduate", "Career"),
                      profileInfoCard("BS Software Engineering", "Program"),
                      profileInfoCard("6th", "Current Semester"),
                    ],
                  ),
                ],
              ),
            ),

            // Tabs for About and Bio Data
            DefaultTabController(
              length: 2,
              child: Column(
                children: [
                  TabBar(
                    labelColor: Colors.blue[900],
                    unselectedLabelColor: Colors.grey,
                    indicatorColor: Colors.blue[900],
                    tabs: const [
                      Tab(text: "ABOUT"),
                      Tab(text: "BIO DATA"),
                    ],
                  ),
                  Container(
                    height: 400, // Adjust as needed
                    child: TabBarView(
                      children: [
                        aboutSection(),
                        bioDataSection(),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget profileInfoCard(String title, String subtitle) {
    return Column(
      children: [
        Text(title, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
        Text(subtitle, style: TextStyle(color: Colors.white70, fontSize: 12)),
      ],
    );
  }

  Widget aboutSection() {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          contactInfo(Icons.email, "Email", "su92-bssem-f22-202@superior.edu.pk"),
          contactInfo(Icons.phone, "Phone", "+92-"),
          contactInfo(Icons.person, "Emergency Contact", "-"),
          contactInfo(Icons.home, "Present Address", "PHOOL NAGAR PATTOKI"),
        ],
      ),
    );
  }

  Widget bioDataSection() {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          // Personal Details
          Row(
            children: [
              Expanded(child: detailsSection("Personal Detail", [
                detailRow(Icons.calendar_today, "Date of Birth", "-"),
                detailRow(Icons.female, "Gender", "Female"),
                detailRow(Icons.credit_card, "CNIC", "000000-00000000-0"),
                detailRow(Icons.location_city, "Domicile", "-"),
                detailRow(Icons.flag, "Nationality", "Pakistan"),
                detailRow(Icons.book, "Religion", "-"),
                detailRow(Icons.bloodtype, "Blood Group", "-"),
              ])),

              // Family Details
              Expanded(child: detailsSection("Family Detail", [
                detailRow(Icons.person, "Father Name", "KHALID NAWAZ"),
                detailRow(Icons.credit_card, "Father CNIC", "-"),
                detailRow(Icons.person, "Guardian Name", "-"),
                detailRow(Icons.credit_card, "Guardian CNIC", "-"),
                detailRow(Icons.family_restroom, "Marital Status", "-"),
              ])),
            ],
          ),
        ],
      ),
    );
  }

  Widget contactInfo(IconData icon, String title, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Icon(icon, color: Colors.blue[900]),
          const SizedBox(width: 10),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: TextStyle(fontSize: 14, color: Colors.grey[700])),
              Text(value, style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            ],
          ),
        ],
      ),
    );
  }

  Widget detailsSection(String title, List<Widget> details) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.blue[900]),
        ),
        const SizedBox(height: 10),
        Column(children: details),
      ],
    );
  }

  Widget detailRow(IconData icon, String title, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5.0),
      child: Row(
        children: [
          Icon(icon, color: Colors.blue[900], size: 20),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              "$title: $value",
              style: const TextStyle(fontSize: 14),
            ),
          ),
        ],
      ),
    );
  }
}
