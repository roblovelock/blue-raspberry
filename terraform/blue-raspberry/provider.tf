# GCP authentication file
variable "gcp_auth_file" {
  type        = string
  description = "GCP authentication file"
}
# define GCP region
variable "gcp_region" {
  type        = string
  description = "GCP region"
}
# define GCP project name
variable "gcp_project" {
  type        = string
  description = "GCP project name"
}

terraform {
  required_version = ">=1.3.9"
  required_providers {
    google = {
      version = ">=4.55.0"
      source  = "hashicorp/google"
    }
    google-beta = {
      version = ">=4.55.0"
      source  = "hashicorp/google-beta"
    }
  }
  backend "gcs" {
    bucket = "blue-raspberry-tf-state"
    prefix = "terraform/state/dev"
  }
}

provider "google" {
  project     = var.gcp_project
  region      = var.gcp_region
  credentials = file(var.gcp_auth_file)
}


provider "google-beta" {
  project     = var.gcp_project
  region      = var.gcp_region
  credentials = file(var.gcp_auth_file)
}