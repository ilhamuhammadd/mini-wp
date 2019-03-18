# Mini-Wp

### Route

### Route for user via browser
| Route                 | HTTP      | Header(s)     | Body      | Description     |
|-----------------------|:---------:|:-------------:|:----------|----------------:|
| /user/signup          |POST       | none          | username:String(Required), password:String(Required), email:String(Required) |Sign up  user|
| /user/signin          |POST       | none          | email:String(Required),password:String(Required)                             |Sign in user |

### Route for user via google sign in
| Route                 | HTTP      | Header(s)     | Body      | Description     |
|-----------------------|:---------:|:-------------:|:----------|----------------:|
| /tokensignin        |POST       | none          | none |Sign in user , using google email|


### Route for article
| Route                 | HTTP      | Header(s)     | Body      | Description     |
|-----------------------|:---------:|:-------------:|:----------|----------------:|
| /mini-wp/article          |GET        | token: String          | none      |Get article's logged    |
| /mini-wp/article/find        |GET        | token: String          | none      |Get article by user|
| /mini-wp/article/create/           |POST       | none          |  title:String(Required),content:String(Required),status:String(Required),imageUrl:String(Required)       |Create an article|
| /mini-wp/article/delete/       |DELETE     | _id: String          | none      |Delete an article    |
| /mini-wp/article/edit        |PUT        | _id:String          |  none     | Update an article   |


### Usage
command |
------- |
$ live-server --host=localhost |

<br>
Access the Client via http://localhost:8080/