resource "google_project" "blue_raspberry" {
  provider = google-beta

  auto_create_network = true
  billing_account     = "01EECF-DD4917-00E52F"
  name                = "Blue Raspberry"
  org_id              = "926236237722"
  project_id          = var.gcp_project

  labels = {
    "firebase" = "enabled"
  }
}
