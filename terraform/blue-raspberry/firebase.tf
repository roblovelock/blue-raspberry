resource "google_firebase_project" "blue_raspberry" {
  provider = google-beta
  project  = google_project.blue_raspberry.project_id
  depends_on = [google_project_service.firebase_googleapis_com]
}

resource "google_firebase_project_location" "blue_raspberry" {
  provider = google-beta
  project  = google_firebase_project.blue_raspberry.project
  location_id = var.gcp_region
}

resource "google_firebase_hosting_site" "blue_raspberry" {
  provider = google-beta
  project  = google_firebase_project.blue_raspberry.project_number
  site_id  = var.gcp_project
}
