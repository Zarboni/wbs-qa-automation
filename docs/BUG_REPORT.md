# Bug Report

## 1. Booking UI Flow Is Inconsistent

### Description
The room booking flow behaves inconsistently depending on the room and selected dates.

During testing:
- some room/date combinations failed unexpectedly during reservation attempts
- other combinations completed successfully using the same flow

### Expected
Booking behaviour should be consistent across valid room/date selections.

### Actual
Certain booking attempts fail without clear explanation while others succeed.

### Impact
High

This affects the platform's primary guest workflow.

---

## 2. Amenities Navigation Link Does Not Work

### Description
The "Amenities" navigation link in the top navigation does not navigate to a valid section.

### Expected
Clicking the Amenities link should navigate to an amenities section or anchor on the page.

### Actual
No navigation or section change occurs.

### Impact
Low

This is primarily a navigation/usability issue.

---

## 3. Booking UI Allows Repeated Duplicate Reservations

### Description
The UI allowed repeated booking submissions for the same room/date combinations during testing.

### Expected
The platform should prevent duplicate/conflicting reservations where appropriate.

### Actual
Repeated bookings appeared to be allowed.

### Impact
Medium

Could potentially lead to double-booking or data inconsistency issues.

---

## Notes

Some of the inconsistencies may be related to the challenge being intentionally unstable, but they were documented because they affected testing behaviour during exploration.