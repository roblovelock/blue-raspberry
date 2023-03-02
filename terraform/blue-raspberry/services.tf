resource "google_project_service" "storage_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "storage.googleapis.com"
}
resource "google_project_service" "storage_component_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "storage-component.googleapis.com"
}
resource "google_project_service" "storage_api_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "storage-api.googleapis.com"
}
resource "google_project_service" "cloudapis_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "cloudapis.googleapis.com"
}
resource "google_project_service" "cloudbilling_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "cloudbilling.googleapis.com"
}
resource "google_project_service" "clouddebugger_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "clouddebugger.googleapis.com"
}
resource "google_project_service" "cloudresourcemanager_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "cloudresourcemanager.googleapis.com"
}
resource "google_project_service" "cloudtrace_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "cloudtrace.googleapis.com"
}
resource "google_project_service" "datastore_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "datastore.googleapis.com"
}
resource "google_project_service" "iam_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "iam.googleapis.com"
}
resource "google_project_service" "iamcredentials_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "iamcredentials.googleapis.com"
}
resource "google_project_service" "logging_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "logging.googleapis.com"
}
resource "google_project_service" "monitoring_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "monitoring.googleapis.com"
}
resource "google_project_service" "servicemanagement_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "servicemanagement.googleapis.com"
}
resource "google_project_service" "serviceusage_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "serviceusage.googleapis.com"
}
resource "google_project_service" "firebase_googleapis_com" {
  project = google_project.blue_raspberry.id
  service = "firebase.googleapis.com"
}