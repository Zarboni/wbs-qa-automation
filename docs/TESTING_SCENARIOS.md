# Test Scenarios

The focus of this framework was not full coverage, but rather identifying important user and system flows that provided the most value within the time available.

## UI Scenarios

### Guest Homepage

#### Scenario
Guest can view important homepage content and room information.

#### Reason
The homepage is the main entry point into the platform and contains the primary booking and navigation information available to guests.

Coverage includes:
- navigation visibility
- room visibility
- pricing visibility
- location/contact sections
- booking section visibility

---

### Contact Form - Successful Submission

#### Scenario
Guest can successfully submit the contact form using valid data.

#### Reason
Contact functionality is a key guest interaction and should work reliably for customer communication.

Coverage includes:
- valid form submission
- successful guest interaction
- success message validation

---

### Contact Form - Validation Handling

#### Scenario
Guest receives validation feedback when invalid data is submitted.

#### Reason
Validation handling is important to prevent bad data entering the system and to provide meaningful feedback to users.

Coverage includes:
- invalid phone number handling
- validation message visibility
- negative testing

---

### Admin Login

#### Scenario
Admin can successfully authenticate into the platform.

#### Reason
Authentication is a critical flow and high-risk area in most applications.

Coverage includes:
- admin login flow
- credential validation
- successful authenticated access

---

### Admin Navigation

#### Scenario
Admin can navigate between major admin sections.

#### Reason
After login, admins should be able to access the main management sections without navigation failures.

Coverage includes:
- rooms section
- report section
- branding section
- messages section

---

# API Scenarios

### API Health Check

#### Scenario
API endpoint responds successfully.

#### Reason
A simple health/smoke check confirms the API is reachable before deeper tests are executed.

---

### Authentication

#### Scenario
Admin credentials return a valid authentication token.

#### Reason
Authentication is required for protected booking update and delete operations.

Coverage includes:
- token generation
- successful authentication response

---

### Booking CRUD Lifecycle

#### Scenario
Booking can be created, retrieved, updated and deleted successfully through the API.

#### Reason
This represents the platform's most important backend workflow.

Coverage includes:
- create booking
- retrieve booking
- partial update
- delete booking
- verification after deletion