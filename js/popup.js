export function showPopup(type) {
    const overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");
  
    const popup = document.createElement("div");
    popup.classList.add("popup");
  
    // Botão de fechar
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.innerText = "X";
    closeBtn.addEventListener("click", () => overlay.remove());
  
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("popup-title");

    const logo = document.createElement("img");
    logo.src = "./imgs/marino_s icon.png"; // ajuste esse caminho se necessário
    logo.alt = "Logo";
    logo.classList.add("popup-logo");

    const title = document.createElement("h2");
    title.innerText = type === "login" ? "Entrar" : "Cadastrar";

    titleContainer.appendChild(logo);
    titleContainer.appendChild(title);
    popup.appendChild(titleContainer);
  
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Email";
  
    const senhaInput = document.createElement("input");
    senhaInput.type = "password";
    senhaInput.placeholder = "Senha";
  
    popup.appendChild(closeBtn);
    popup.appendChild(title);
    popup.appendChild(emailInput);
    popup.appendChild(senhaInput);
  
    if (type === "register") {
      const enderecoInput = document.createElement("input");
      enderecoInput.type = "text";
      enderecoInput.placeholder = "Endereço";
      popup.appendChild(enderecoInput);
    }
  
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerText = type === "login" ? "Entrar" : "Cadastrar";
    popup.appendChild(submitBtn);
  
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }
  