import 'package:flutter/material.dart';

class BusSchedulePage extends StatefulWidget {
  @override
  _BusSchedulePageState createState() => _BusSchedulePageState();
}

class _BusSchedulePageState extends State<BusSchedulePage> {
  // Dummy bus schedule data
  List<Map<String, String>> busSchedules = [
    {"time": "07:00 AM", "route": "City Center - University"},
    {"time": "08:30 AM", "route": "Main Market - University"},
    {"time": "10:00 AM", "route": "Railway Station - University"},
    {"time": "12:00 PM", "route": "Bus Stand - University"},
    {"time": "02:00 PM", "route": "City Center - University"},
    {"time": "04:00 PM", "route": "Main Market - University"},
    {"time": "06:00 PM", "route": "Railway Station - University"},
    {"time": "08:00 PM", "route": "University - City Center"},
  ];

  List<Map<String, String>> filteredSchedules = [];

  @override
  void initState() {
    super.initState();
    filteredSchedules = List.from(busSchedules);
  }

  // Search filter function
  void filterSchedule(String query) {
    setState(() {
      filteredSchedules = busSchedules
          .where((bus) =>
      bus["time"]!.toLowerCase().contains(query.toLowerCase()) ||
          bus["route"]!.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Bus Schedule", style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
        backgroundColor: Colors.blueAccent,
        centerTitle: true,
      ),
      body: Column(
        children: [
          // Search bar
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: TextField(
              onChanged: filterSchedule,
              decoration: InputDecoration(
                hintText: "Search by time or route...",
                prefixIcon: Icon(Icons.search, color: Colors.blueAccent),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),
          ),

          // Bus Schedule List
          Expanded(
            child: filteredSchedules.isEmpty
                ? Center(
              child: Text(
                "No buses found",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            )
                : ListView.separated(
              itemCount: filteredSchedules.length,
              separatorBuilder: (context, index) => Divider(),
              itemBuilder: (context, index) {
                return ListTile(
                  leading: Icon(Icons.directions_bus, color: Colors.blueAccent),
                  title: Text(
                    filteredSchedules[index]["time"]!,
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  subtitle: Text(
                    filteredSchedules[index]["route"]!,
                    style: TextStyle(fontSize: 16),
                  ),
                  trailing: Icon(Icons.arrow_forward_ios, color: Colors.grey),
                );
              },
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            filteredSchedules = List.from(busSchedules); // Reset to original
          });
        },
        backgroundColor: Colors.blueAccent,
        child: Icon(Icons.refresh, color: Colors.white),
      ),
    );
  }
}
