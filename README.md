---
marp : true
---
# HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Copy to ClipBoard with Jquery</title>
    <!--Custome css link -->
    <link rel="stylesheet" href="style.css" />
    <!-- iconsout link -->
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
    />
  </head>
  <body>
    <div class="container">
      <h1>Copy to ClipBoard</h1>
      <textarea class="text"></textarea>
      <button class="btn">Copy<i class="uil uil-copy"></i></button>
      <span class="copied">Copied</span>
    </div>
    <!-- font awesome -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/fontawesome.min.js"
      integrity="sha512-64O4TSvYybbO2u06YzKDmZfLj/Tcr9+oorWhxzE3yDnmBRf7wvDgQweCzUf5pm2xYTgHMMyk5tW8kWU92JENng=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <!-- jquery main file -->
    <script src="../basic/jquery.js"></script>
    <!-- custom js -->
    <script src="script.js"></script>
  </body>
</html>
```
---
# CSS
```css
* {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    font-family: monospace;
}

html,
body {
    height: 100%;
    width: 100%;
}

.container {
    height: 50%;
    width: 30%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    gap: 2rem;

}

.container textarea {
    width: 100%;
    height: 120rem;
    font-size: 1.5rem;
    border: none;
    padding: 0.3rem;
}

.container button {
    width: max-content;
    padding: 0.2rem 0.9rem;
    font-size: large;
    color: rgb(0, 0, 0);
    background-color: rgb(89, 204, 243);
    outline: none;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: 0.1s all ease;
}

.container button:active {
    scale: 1.1;
}

.container .copied {

    display: none;
}
```
---
# jQuery
```js
jQuery.noConflict();
jQuery(document).ready(($) => {
  // creating the two functions to add and remove the  copied wala part
  function add() {
    $(".copied").show();
  }

  function removing() {
    setTimeout(() => {
      $(".copied").hide();
    }, 2000);
  }

  //calling the function

  $(".btn").click(() => {
    const str = $(".text").val();
    console.log(str);
    console.log(navigator);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(str).then(() => {
        add();
        removing();
      });
    } else {
      alert("Does not having ClipBoard");
    }
  });
});


```
---
![image](https://github.com/BroLetsCodeIt/CopytoClipBoard/assets/113767803/5d974a3a-e82c-4d11-8426-b05a0b847422)
