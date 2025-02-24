import { expencesNavBtn, expencesNavTab, incomeNavBtn, incomeNavTab, salaryNavBtn, salaryNavTab, withdrowalsNavBtn, withdrowalsNavTab } from "../../Elements/elements.js";

export function tabNavEvent() {



  incomeNavBtn.addEventListener("click", () => {

    incomeNavTab.classList.add("active");
    incomeNavTab.classList.add("show");
    expencesNavTab.classList.remove("active");
    expencesNavTab.classList.remove("show");
    withdrowalsNavTab.classList.remove("active");
    withdrowalsNavTab.classList.remove("show");
    salaryNavTab.classList.remove("active");
    salaryNavTab.classList.remove("show");
    incomeNavBtn.classList.add("active");
    expencesNavBtn.classList.remove("active");
    withdrowalsNavBtn.classList.remove("active");
    salaryNavBtn.classList.remove("active");


  });
  expencesNavBtn.addEventListener("click", () => {
    expencesNavTab.classList.add("active");
    expencesNavTab.classList.add("show");
    incomeNavTab.classList.remove("active");
    incomeNavTab.classList.remove("show");
    withdrowalsNavTab.classList.remove("active");
    withdrowalsNavTab.classList.remove("show");
    salaryNavTab.classList.remove("active");
    salaryNavTab.classList.remove("show");
    expencesNavBtn.classList.add("active");
    incomeNavBtn.classList.remove("active");
    withdrowalsNavBtn.classList.remove("active");
    salaryNavBtn.classList.remove("active");
  })

  withdrowalsNavBtn.addEventListener("click", () => {
    withdrowalsNavTab.classList.add("active");
    withdrowalsNavTab.classList.add("show");
    expencesNavTab.classList.remove("active");
    expencesNavTab.classList.remove("show");
    incomeNavTab.classList.remove("active");
    incomeNavTab.classList.remove("show");
    salaryNavTab.classList.remove("active");
    salaryNavTab.classList.remove("show");
    withdrowalsNavBtn.classList.add("active");
    expencesNavBtn.classList.remove("active");
    incomeNavBtn.classList.remove("active");
    salaryNavBtn.classList.remove("active");

  })

  salaryNavBtn.addEventListener("click", () => {
    salaryNavTab.classList.add("active");
    salaryNavTab.classList.add("show");
    withdrowalsNavTab.classList.remove("active");
    withdrowalsNavTab.classList.remove("show");
    expencesNavTab.classList.remove("active");
    expencesNavTab.classList.remove("show");
    incomeNavTab.classList.remove("active");
    incomeNavTab.classList.remove("show");
    salaryNavBtn.classList.add("active");
    expencesNavBtn.classList.remove("active");
    withdrowalsNavBtn.classList.remove("active");
    incomeNavBtn.classList.remove("active");


  })


}