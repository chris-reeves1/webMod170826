"use strict";

const $ = (selector, root = document) => root.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {
    initDemo1_changeText();
    initDemo2_addNumbers();
    initDemo3_inputEvent();
    initDemo4_eventDelegation();
    initDemo5_appendListItem();
});

/////////////////////////////////////////////////////////////////////////

function initDemo1_changeText() {
    const output = $("#d1-output");
    const button = $("#d1-btn");

    button.addEventListener("click", (event) => {
        output.textContent = "button clicked and text changed";
        console.log("successful", event.type);
    });
}



///////////////////////////////////////////////////////////////////////

function initDemo2_addNumbers() {
    const aInput = $("#d2-a");
    const bInput = $("#d2-b");
    const button = $("#d2-add");
    const result = $("#d2-result");

    button.addEventListener("click", () => {
        const a = Number(aInput.value);
        const b = Number(bInput.value);

        if (Number.isNaN(a) || Number.isNaN(b)){
            result.textContent = "please enter a valid number in the box";
            return;
        }

        result.textContent = `Result: ${a + b}`;
    })}

/////////////////////////////////////////////////////////////////////////

function initDemo3_inputEvent(){
    const input = $("#d3-text");
    const live = $("#d3-live");

    input.addEventListener("input", () => {
        live.textContent = input.value.trim() === "" ? "(empty)" : input.value;
    });
}

/////////////////////////////////////////////////////////////////////////



function initDemo4_eventDelegation() {
    const pad = $("#d4-pad");
    const out = $("#d4-out");


    pad.addEventListener("click", (event) => {
        //event.taget == actual object
        const button = event.target.closest("button[data-op]");
        if (!button) return;
        out.textContent = `you clicked on ${button.dataset.op}`;


    })

}

/////////////////////////////////////////////////////////////////////////

function initDemo5_appendListItem() {
    const input = $("#d5-text");
    const button = $("#d5-add");
    const list = $("#d5-list");

    button.addEventListener("click", () => {
        const text = input.value.trim();
        if (text === "") return;

        const item = document.createElement("li");
        item.textContent = text;
        list.append(item);

        input.value = "";
        input.focus();
    });
}
