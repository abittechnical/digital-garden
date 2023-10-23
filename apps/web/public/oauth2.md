# OAuth 2.0

## OAuth Vocabulary

- The exchange between an application and OAuth managed resource is called a **flow** or **grant type**
- The permissions are called **scopes** , which vary across sites
- Access is granted via **tokens**

## RFC 6749: OAuth Core

- **/authorize**

  The endpoint which the end user (resource owner) interacts with to grant permission to the resource for the application.

  Could return an authorization code or an access token.

- **/token**

  The endpoint which the application uses to trade an authorization code or refresh token for an access token

  ### Access Tokens

  > _"Access tokens are credentials used to access protected resources. An access token is a string representing an authorization issued to the client. The string is usually opaque to the client."_

  > _"Tokens represent specific scopes and durations of access, granted by the resource owner, and enforced by the resource server and authorization server."_

  > _"The access token provides an abstraction layer, replacing different authorization constructs (e.g., username and password) with a single token understood by the resource server"_

  > _"Access tokens can have different formats, structures, and methods of utilization (e.g., cryptographic properties) based on the resource server security requirements"_

  The token given to the application to access the protected resource on the user or application's behalf.

  - No formal requirements to format, contents, etc.

  ### Refresh Token

  The token given to the application to request a new access token on its expiration

  ## RFC 7519 JSON Web Token (JWT)

  - "iss" - the issuer of the token, an entity we trust

  - "sub" - the subject (user) of the token

  - "aud" - the audience or intended recipient of the token

  - "exp" - the expiration time of the token

## RFC 7009: Token Revocation

- **/revoke**

  The endpoint which applications use to deactivate (invalidate) a token

  Valid for access or refresh tokens

## RFC 7662: Token Introspection

- **/introspect**

  The endpoint which applications use to learn more about a token

  Whether it is active or not (not revoked, within expiration)

  (Optional)Additional information such as expiration time, scopes included, the issued to client_id, etc.

## RFC 7591: Dynamic Client Registration

- **/register**

  The endpoint which applications use to create new OAuth clients (client_id and client_secret) for provisioning new applications or uses

  Introduces the concept of "metadata discovery documents"
