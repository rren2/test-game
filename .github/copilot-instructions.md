* Rule *
We always write JavaScript with single quotes and tabs for indentation, so when your responses include JavaScript code, please follow those conventions.

Our team uses Jira for tracking issues and tasks. When you mention a task, please use the format `[PPW-1234]` where `PPW-1234` is the task number. For example, `JIRA-1234`.

** Coding Standards and Naming Conventions **
- do name members that return a boolean value with language that equates to the true condition, e.g. enabled, isValid, canBeDone

** Secure Coding Standards **
- do implement and redirect end user to custom error page rather than risk exposing sensitive error information

- do remove unused/unnecessary package references in your applications

- do keep referenced packages up to date, particularly those that have known vulnerabilities (as identified by dependabot) 

- do set the recommended security control in http headers for web apps unless there is a valid reason to allow otherwise (eg. X-Frame-Options: DENY X-Content-Type-Options: nosniff Referrer-Policy: strict-origin-when-cross-origin Strict-Transport-Security: max-age=63072000; includeSubDomains; preload) 


When you are creating commands, please ensure that you:
- use powershell for Windows commands

