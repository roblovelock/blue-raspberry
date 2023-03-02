resource "google_storage_bucket" "tf_state" {
  force_destroy               = false
  location                    = "EU"
  name                        = "${var.gcp_project}-tf-state"
  project                     = var.gcp_project
  public_access_prevention    = "enforced"
  storage_class               = "STANDARD"
  uniform_bucket_level_access = true
}
