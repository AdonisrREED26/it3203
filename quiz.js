// Unique variable naming paradigm and tracking matrix
const MATRIX_ANSWER_SCHEMATIC = {
    fillQuestion: "edge computing",
    radioMeta: "React",
    radioLatency: "high-latency",
    radioSvelte: "Svelte",
    checkBenefits: ["reusable", "state"]
};

document.getElementById('matrixQuizEngine').addEventListener('submit', function(matrixEvent) {
    matrixEvent.preventDefault();

    let computedPoints = 0;
    let streamDiagnosticLog = "";

    // Node 1 Processing (Fill-in-the-blank text field analysis)
    const rawInputOne = document.getElementById('param_edge_compute').value.trim().toLowerCase();
    if (rawInputOne === MATRIX_ANSWER_SCHEMATIC.fillQuestion) {
        computedPoints++;
        streamDiagnosticLog += `<div class="log-node metric-pass">⭐ <b>Parameter 01 Pass:</b> Identified operational edge node proximity correctly.</div>`;
    } else {
        streamDiagnosticLog += `<div class="log-node metric-fail">⚠️ <b>Parameter 01 Fail:</b> Input detected: "${rawInputOne || 'None'}". Expected System Key: "Edge Computing".</div>`;
    }

    // Node 2 Processing (Radio Engine analysis)
    const activeRadioTwo = document.querySelector('input[name="param_meta_fw"]:checked');
    if (activeRadioTwo && activeRadioTwo.value === MATRIX_ANSWER_SCHEMATIC.radioMeta) {
        computedPoints++;
        streamDiagnosticLog += `<div class="log-node metric-pass">⭐ <b>Parameter 02 Pass:</b> Correctly isolated React Engine as Meta's ecosystem product.</div>`;
    } else {
        streamDiagnosticLog += `<div class="log-node metric-fail">⚠️ <b>Parameter 02 Fail:</b> Incorrect system choice selection. True vector: React Engine.</div>`;
    }

    // Node 3 Processing (Radio Engine analysis)
    const activeRadioThree = document.querySelector('input[name="param_edge_benefit"]:checked');
    if (activeRadioThree && activeRadioThree.value === MATRIX_ANSWER_SCHEMATIC.radioLatency) {
        computedPoints++;
        streamDiagnosticLog += `<div class="log-node metric-pass">⭐ <b>Parameter 03 Pass:</b> Correctly mapped mitigation of Server Packet Latency.</div>`;
    } else {
        streamDiagnosticLog += `<div class="log-node metric-fail">⚠️ <b>Parameter 03 Fail:</b> Incorrect optimization mapping. True target: Severe Packet Latency.</div>`;
    }

    // Node 4 Processing (Radio Engine analysis)
    const activeRadioFour = document.querySelector('input[name="param_compile_style"]:checked');
    if (activeRadioFour && activeRadioFour.value === MATRIX_ANSWER_SCHEMATIC.radioSvelte) {
        computedPoints++;
        streamDiagnosticLog += `<div class="log-node metric-pass">⭐ <b>Parameter 04 Pass:</b> Recognized Svelte's compile-time optimizations.</div>`;
    } else {
        streamDiagnosticLog += `<div class="log-node metric-fail">⚠️ <b>Parameter 04 Fail:</b> Incorrect compiler framework selected. True vector: Svelte Compiler.</div>`;
    }

    // Node 5 Processing (Multi-Selection Array Validation)
    const selectedBoxes = Array.from(document.querySelectorAll('input[name="param_benefits"]:checked')).map(boxNode => boxNode.value);
    const complexCheckValidation = selectedBoxes.length === MATRIX_ANSWER_SCHEMATIC.checkBenefits.length && 
                                  selectedBoxes.every(element => MATRIX_ANSWER_SCHEMATIC.checkBenefits.includes(element));
    
    if (complexCheckValidation) {
        computedPoints++;
        streamDiagnosticLog += `<div class="log-node metric-pass">⭐ <b>Parameter 05 Pass:</b> Validated modern frontend architectural optimization profiles.</div>`;
    } else {
        streamDiagnosticLog += `<div class="log-node metric-fail">⚠️ <b>Parameter 05 Fail:</b> Invalid subset chosen. Intended answers: modular layouts & reactive states.</div>`;
    }

    // Output Generation Processing
    const wrapperPanel = document.getElementById('matrixOutputPanel');
    const briefSummary = document.getElementById('matrixScoreSummary');
    const extendedStream = document.getElementById('matrixDiagnosticStream');

    const matrixRequirementBar = 3;
    const clearanceStatus = computedPoints >= matrixRequirementBar;

    briefSummary.innerHTML = `
        <div class="summary-card">
            <p>Evaluation Index: <strong>${computedPoints} / 5 Units</strong></p>
            <p>System Status: <span class="${clearanceStatus ? 'text-sys-pass' : 'text-sys-fail'}">${clearanceStatus ? 'METRIC SECURED (PASS)' : 'METRIC DEGRADED (FAIL)'}</span></p>
        </div>
    `;

    extendedStream.innerHTML = streamDiagnosticLog;
    wrapperPanel.classList.remove('display-barrier');
});

// Wipe Action Handler Trigger
document.getElementById('engineWipe').addEventListener('click', function() {
    document.getElementById('matrixQuizEngine').reset();
    const wrapperPanel = document.getElementById('matrixOutputPanel');
    wrapperPanel.classList.add('display-barrier');
    document.getElementById('matrixDiagnosticStream').innerHTML = "";
    document.getElementById('matrixScoreSummary').innerHTML = "";
});
