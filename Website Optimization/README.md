### How to run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

Then open a browser and visit localhost:8080

### Changes made to optimize Critical Rendering Path

- Minified profilepic.jpg and pizzeria.jpg
- Inlined style.css in index.html
- Inlined google font script in index.html

### Changes made to achieve 60fps

- Moved the method of calculating "document.body.scrollTop / 1250" outside of the for loop
- Use window height to generate pizza layer numbers

### Changes made to improve Computation Efficiency

- Changed changePizzaSizes function to improve Computational Efficiency


