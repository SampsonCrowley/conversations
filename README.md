# conversation forms
Build forms that have a conversation with your clients for the ultimate UX!

## Instructions

Include the javascript as the last item in the body of your page:

```
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <title>Webpack-react</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  ...
  ...
  <script type="text/javascript" src="path/to/conversation_forms.js"></script>
</body>

</html>
```

on any pages that you want to use a conversation form, simply set the form's ID to `convo-form`
conversation forms will automatically detect your form's method and action

```
<form id="convo-form">
  <input type="text" id="test-input" name="test">
</form>
```

That's It!

## Advanced options (recommended)

to set the question for an input, add the `data-question` attribute
```
<input type="text" name="name" data-question="What is your name?">
<input type="text" name="birthday" data-question="What is your birthday? (please enter DD/MM/YYYY)">
<input type="text" name="email" data-question="Thanks! What is the best email for me to reach you at?">
```

obscure the display of user input to the screen, add `data-secure="true"`
```
<input type="text" name="secure-input" data-secure="true">
```
instead of displaying what they submitted, it will dislay the text `[SECURITY FILTERED INPUT]`

NOTE: any fields with `type="password"` or `name="password"` will automatically have the secure flag set. For security purposes, this is not an option you can override.

```
<input type="text" id="password" name="password" data-question="Please enter the password you would to use for your account. (Don't worry, I'm a robot, no one will see it)">
```


## contributors

[Sampson Crowley](https://github.com/SampsonCrowley)
