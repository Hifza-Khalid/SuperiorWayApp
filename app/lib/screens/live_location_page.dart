import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';
import 'dart:async';

class LiveLocationPage extends StatefulWidget {
  @override
  _LiveLocationPageState createState() => _LiveLocationPageState();
}

class _LiveLocationPageState extends State<LiveLocationPage> {
  late GoogleMapController _mapController;
  LatLng _currentLocation = LatLng(0, 0);
  LatLng _busLocation = LatLng(37.7749, -122.4194); // Dummy bus location
  Set<Marker> _markers = {};
  late Timer _timer;

  @override
  void initState() {
    super.initState();
    _getCurrentLocation();
    _startTrackingBus();
  }

  /// Get Student's Current Location
  Future<void> _getCurrentLocation() async {
    Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high);
    setState(() {
      _currentLocation = LatLng(position.latitude, position.longitude);
      _updateMarkers();
    });
  }

  /// Simulate Real-Time Bus Location Update
  void _startTrackingBus() {
    _timer = Timer.periodic(Duration(seconds: 5), (timer) {
      setState(() {
        _busLocation = LatLng(
          _busLocation.latitude + 0.001, // Simulating movement
          _busLocation.longitude + 0.001,
        );
        _updateMarkers();
      });
    });
  }

  /// Update Markers on Map
  void _updateMarkers() {
    _markers.clear();
    _markers.add(
      Marker(
        markerId: MarkerId('currentLocation'),
        position: _currentLocation,
        icon: BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueBlue),
        infoWindow: InfoWindow(title: "You"),
      ),
    );
    _markers.add(
      Marker(
        markerId: MarkerId('busLocation'),
        position: _busLocation,
        icon: BitmapDescriptor.defaultMarkerWithHue(BitmapDescriptor.hueRed),
        infoWindow: InfoWindow(title: "Bus"),
      ),
    );
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Live Bus Tracking")),
      body: GoogleMap(
        initialCameraPosition: CameraPosition(
          target: _currentLocation,
          zoom: 14,
        ),
        markers: _markers,
        onMapCreated: (GoogleMapController controller) {
          _mapController = controller;
        },
      ),
    );
  }
}
