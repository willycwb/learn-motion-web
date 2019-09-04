import { Tools } from "./tools";
import Axios from "axios";

export class Form extends Tools {
  constructor(form) {
    super();
    let { $ } = this;
    this.selector = form === undefined ? "form" : form;
    this.form = $("form");
    this.validaCampos();
    this.form.forEach(f => {
      f.querySelectorAll("input, textarea").forEach(i => {
        i.addEventListener("input", () => {
          this.validaCampos();
          if (i.getAttribute("name") === "telefone") {
            i.value = this.validaTelefone(i.value);
          }
        });
        if (i.getAttribute("name") === "estado") {
          this.inicial = f.querySelector("[name='cidade']").innerHTML;
          this.validaEstado(f);
        }
        if (i.getAttribute("name") === "data" && i.getAttribute("after")) {
          this.validateData(i);
        }
      });

      f.addEventListener("submit", e => {
        e.preventDefault();
        let form = e.target;
        let action = form.getAttribute("action");
        this.addClass(form.querySelector("button"), "loading");
        let data  = new FormData(e.target);
        Axios.post(action, data).then(resposta => {
          form.querySelectorAll("input, textarea").forEach( i => {
            i.value = "";
          });
          this.removeClass(form.querySelector("button"), "loading");
          this.addClass(form.querySelector("button"), "sucesso");
          setTimeout(() => {
            this.removeClass(form.querySelector("button"), "sucesso");
            form.querySelector("button").disabled = true;
          }, 5000);
          dataLayer.push({
            event: 'formularioEnviado',
            assunto: data.get("assunto")
          });
        });
      });
    });
  }

  validaCampos() {
    this.form.forEach(f => {
      let complete = [];
      f.querySelectorAll("input, textarea").forEach(i => {
        if (
          i.getAttribute("required") != null ||
          i.getAttribute("required") != undefined
        ) {
          if (i.value.length > 0) {
            if (i.getAttribute("name") == "telefone") {
              i.value.length >= 14 ? complete.push(true) : complete.push(false);
            } else {
              complete.push(true);
            }
          } else {
            complete.push(false);
          }
        }
      });
      if (complete.every(e => e)) {
        if (f.querySelector("button[type='submit']") !== null) {
          f.querySelector("button[type='submit']").disabled = false;
        }
      } else {
        if (f.querySelector("button[type='submit']") !== null) {
          f.querySelector("button[type='submit']").disabled = true;
        }
      }
    });
  }
  validaTelefone(input) {
    input = input.replace(/\D/g, "");

    input = input.substring(0, 11);
    var size = input.length;
    if (size == 0) {
      input = input;
    } else if (size < 3) {
      input = "(" + input;
    } else if (size <= 6) {
      input = "(" + input.substring(0, 2) + ") " + input.substring(2, 7);
    } else if (size <= 10) {
      input =
        "(" +
        input.substring(0, 2) +
        ") " +
        input.substring(2, 6) +
        "-" +
        input.substring(6, 10);
    } else {
      input =
        "(" +
        input.substring(0, 2) +
        ") " +
        input.substring(2, 7) +
        "-" +
        input.substring(7, 11);
    }
    return input;
  }

  validateData(data) {
    let hoje = new Date();
    let day =
      (hoje.getDay() + 1).toString().length === 1
        ? "0" + (hoje.getDay() + 1)
        : hoje.getDay() + 1;
    let month =
      (hoje.getMonth() + 1).toString().length === 1
        ? "0" + (hoje.getMonth() + 1)
        : hoje.getMonth() + 1;
    let year = hoje.getFullYear();
    let value = year + "-" + month + "-" + day;

    data.setAttribute("min", value);
  }

  validaEstado(f) {
    let select = f.querySelector('[name="estado"]');
    Axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    ).then(response => {
      let arr = response.data;
      arr.sort(function(a, b) {
        return a.sigla.localeCompare(b.sigla);
      });
      arr.forEach(object => {
        let option = document.createElement("option");
        option.setAttribute("value", object.id);
        let uf = document.createTextNode(object.sigla);
        option.appendChild(uf);
        select.appendChild(option);
      });
    });
    select.addEventListener("change", () => {
      this.validaCidade(f, select.value);
    });
  }
  validaCidade(f, uf) {
    let select = f.querySelector('[name="cidade"]');
    select.innerHTML = this.inicial;
    Axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/microrregioes`
    ).then(response => {
      let arr = response.data;
      arr.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
      });
      arr.forEach(object => {
        let option = document.createElement("option");
        let uf = document.createTextNode(object.nome);
        option.appendChild(uf);
        select.appendChild(option);
      });
    });
  }
}