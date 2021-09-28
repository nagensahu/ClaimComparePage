import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        field:"Provider ID",
        claim1: "947947419",
        claim2: "947947419",
        claim3 : "947947419",
        claim4: "947947419"
    },
    {   
        id: "1",
        field:"Provider Name",
        claim1: "Holland Hospital",
        claim2: "Holland Hospital",
        claim3 : "Holland Hospital",
        claim4: "Holland Hospital"
    },
    {   
        id: "2",
        field:"Date of service",
        claim1: "09/11/2014",
        claim2: "09/11/2014",
        claim3 : "09/11/2014",
        claim4: "09/11/2014"
    },
    {   
        id: "3",
        field:"Billed Units",
        claim1: "123",
        claim2: "123",
        claim3 : "123",
        claim4: "123"
    },
    {   
        id: "4",
        field:"Billed Amount",
        claim1: "$123.45",
        claim2: "$123.45",
        claim3 : "$123.45",
        claim4: "$123.45"
    },
    {   
        id: "5",
        field:"Allowed Amount",
        claim1: "$123.45",
        claim2: "$123.45",
        claim3 : "$123.45",
        claim4: "$123.45"
    },
    {   
        id: "6",
        field:"Total Paid",
        claim1: "$123.45",
        claim2: "$123.45",
        claim3 : "$123.45",
        claim4: "$123.45"
    },
    {   
        id: "7",
        field:"Paid Date",
        claim1: "09/11/2014",
        claim2: "09/11/2014",
        claim3 : "09/11/2014",
        claim4: "09/11/2014"
    },
    {   
        id: "8",
        field:"Disallow Code",
        claim1: "DUMMY",
        claim2: "DUMMY",
        claim3 : "DUMMY",
        claim4: "DUMMY"
    },
    {   
        id: "9",
        field:"CPT Code",
        claim1: "DUMMY",
        claim2: "DUMMY",
        claim3 : "DUMMY",
        claim4: "DUMMY"
    },
    {   
        id: "10",
        field:"Diagnosis Code",
        claim1: "DUMMY",
        claim2: "DUMMY",
        claim3 : "DUMMY",
        claim4: "DUMMY"
    },
    {   
        id: "12",
        field:"Member Liability",
        claim1: "DUMMY",
        claim2: "DUMMY",
        claim3 : "DUMMY",
        claim4: "DUMMY"
    },
    {   
        id: "13",
        field:"Field 13",
        claim1: "DUMMY",
        claim2: "DUMMY",
        claim3 : "DUMMY",
        claim4: "DUMMY"
    },
    {   
        id: "14",
        field:"Field 14",
        claim1: "DUMMY",
        claim2: "DUMMY",
        claim3 : "DUMMY",
        claim4: "DUMMY"
    },
    {   
        id: "15",
        field:"Field 15",
        claim1: "DUMMY",
        claim2: "DUMMY",
        claim3 : "DUMMY",
        claim4: "DUMMY"
    }

];

const LINEITEMCOLUMNS = [
    { label: 'Field', fieldName: 'field', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: '255608384900', fieldName: 'claim1', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: '366608384900', fieldName: 'claim2', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: '477608384900', fieldName: 'claim3', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: '588608384900', fieldName: 'claim4', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
];

export default class App extends LightningElement {
    @track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;
}