---
title: "My cloud deploy solution"
excerpt: "This article details the processes for setting up AWS services, uploading files to S3, hosting on EC2, and configuring CI/CD with Docker and GitHub Actions."
date: "2024-06-16"

---
## AWS

- **Create an AWS Account**
- **Create an IAM User**
- **Assign Permissions to the IAM User**
- **IAM Group:**  Allows assigning permissions in bulk
- **IAM Policy:** Allows assigning permissions in bulk

    - `AdministratorAccess` for administrative privileges
    - `AmazonS3FullAccess` for accessing files
    - Obtain the `secret access key` (this might not be where you get the key)

## Uploading Files to S3

- **Create S3**
- **Create a Bucket**
- **Bucket Policy**
	```json
    //.json
	{
		"Version": "2012-10-17",
		"Statement": [
			{
				"Sid": "TEST",
				"Effect": "Allow",
				"Principal": {
					"AWS": "*"
				},
				"Action": [
					"s3:ListBucket",
					"s3:GetObject",
					"s3:PutObject",
					"s3:DeleteObject"
				],
				"Resource": [
					"arn:aws:s3:::seanim.sendit",
					"arn:aws:s3:::seanim.sendit/*"
				]
			}
		]
	}
	```

## Hosting the Server on EC2 (PaaS)

- **Create an EC2 Instance**
	- Log in to the AWS Management Console.
	- Navigate to the EC2 console and launch a new instance.
	- Choose an appropriate AMI (e.g., Amazon Linux 2 or Ubuntu).
	- Select an instance type (e.g., t2.micro for testing purposes).
	- Configure the security group to open necessary ports (e.g., 80 and 443 for HTTP and HTTPS, and 22 for SSH).

- **Key Pairs**
	- Download the `yourkey.pem` file.

- **Launch Instances and Connect to the EC2 Instance**
	- Click `Connect` 
    - Select `SSH client`
    ```bash
    ssh -i "SeaniM.pem" ec2-user@ec2-54-79-35-135.ap-southeast-2.compute.amazonaws.com
    ```

- **Configure Permissions (Security Group)**
	- HTTP: 80
	- HTTPS: 443
	- SSH (GitHub Action/self): 22 (your IP/GitHub Action IP)
	- MongoDB: 27017
	- File Channel: Your program's interface

- **Upload Local Files to EC2**
	- Upload folders or specific files via SSH

FORMAT:
```bash
scp -i /path/to/your-key-pair.pem -r /path/to/your/project ec2-user@your-ec2-instance-public-dns:~/PROJECT
```

**!!Be sure to exclude sensitive files**

- **Install Programs on EC2**
	- Connect to EC2 via SSH
	- Install files: Git, MongoDB, Docker, Nginx, Certbot
        	

- **Apply for a Domain and connect to it**

- **Set Up Nginx as a Reverse Proxy for the Domain**

- **Apply for SSL with Certbot**
	- 90-day expiration: Can set up automated certificate renewal

## CI/CD

- Create a **Dockerfile** locally
- Push files to GitHub
- Create **GitHub Actions**: Configure SSH and GPG keys in the settings

>> -This is just a brief overview of CI/CD. I'll write another post with detailed information.



