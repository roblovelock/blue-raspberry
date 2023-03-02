resource "google_service_account" "terraform" {
  account_id   = "terraform"
  description  = "Service Account for Terraform"
  display_name = "terraform"
  project      = var.gcp_project
}
