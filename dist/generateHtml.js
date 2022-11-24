function generateHtml(resTeam) {
  function manager(resManager) {
    return `
    <div class="card m-4 shadow | custom-bg-light-gray">
        <div class="card-header py-3 | text-white bg-primary">
          <h2>${resManager.getName()}</h2>
          <i class="bi bi-cup-hot"></i>
          <span class="ms-1">${resManager.getRole()}</span>
        </div>
        <ul class="list-group px-3 my-auto">
          <li class="list-group-item">ID: ${resManager.getId()}</li>
          <li class="list-group-item">Email: <a href="#">${resManager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${resManager.getOffice()}</li>
        </ul>
    </div>
      `;
  }
  function engineer(resEngineer) {
    return `
    <div class="card m-4 shadow | custom-bg-light-gray">
        <div class="card-header py-3 | text-white bg-primary">
          <h2>${resEngineer.getName()}</h2>
          <i class="bi bi-eyeglasses"></i>
          <span class="ms-1">${resEngineer.getRole()}</span>
        </div>
        <ul class="list-group px-3 my-auto">
          <li class="list-group-item">ID: ${resEngineer.getId()}</li>
          <li class="list-group-item">Email: <a href="#">${resEngineer.getEmail()}</a></li>
          <li class="list-group-item">Github: <a href="#">${resEngineer.getGitHub()}</a></li>
        </ul>
    </div>
    `;
  }
  function intern(resIntern) {
    return `
    <div class="card m-4 shadow | custom-bg-light-gray">
        <div class="card-header py-3 | text-white bg-primary">
          <h2>${resIntern.getName()}</h2>
          <i class="bi bi-mortarboard"></i>
          <span class="ms-1">${resIntern.getRole()}</span>
        </div>
        <ul class="list-group px-3 my-auto">
          <li class="list-group-item">ID: ${resIntern.getId()}</li>
          <li class="list-group-item">Email: <a href="#">${resIntern.getEmail()}</a></li>
          <li class="list-group-item">School: ${resIntern.getSchool()}</li>
        </ul>
    </div>

    `;
  }

  const dom = [];
  dom.push(resTeam.filter((x) => x.getRole() === "Manager").map((y) => manager(y)));
  dom.push(resTeam.filter((x) => x.getRole() === "Engineer").map((y) => engineer(y)));
  dom.push(resTeam.filter((x) => x.getRole() === "Intern").map((y) => intern(y)));
  return dom.join("");
}

module.exports = (res) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
  <style>
      .card {
        width: 18rem;
        height: 20rem;
      }
      .custom-bg-light-gray {
        background-color: rgb(247, 247, 247);
      }
      a {
        text-decoration: none;
      }
  </style>
  <title>Team Profile Generator</title>
</head>
<body>
<header class="container-fluid p-4 | fs-1 text-center text-white bg-danger">My Team</header>
<main class="container d-flex flex-wrap justify-content-center align-content-center|" style="min-height: 90vh">
${generateHtml(res)}
</main>
</body>
</html>
  `;
};
