import { LightningElement } from "lwc";

export default class App extends LightningElement {
  columns = [
    {label: 'cod', fieldName:  'cod'},
    {label: 'nome', fieldName: 'nome'},
    {label: 'desenho', fieldName:  'desenho'},
    {label: 'força', fieldName:  'forca'}
  ];

  //Nome, desenho, Força , agilidade, inteligência, beleza
  listaDisney = [
    {cod:1, nome:'Luke', desenho:'Star wars', forca: '100', agilidade: '80', inteligencia:'50', beleza:'0'},
    {cod:2, nome:'Mickey', desenho:'Mickey Mouse', forca: '80', agilidade: '50', inteligencia:'20', beleza:'80'},
    {cod:3, nome:'Capitão America', desenho:'Os Vingadores', forca: '100', agilidade: '70', inteligencia:'70', beleza:'1000000'},
    {cod:4, nome:'Viuva Negra', desenho:'Os Vingadores', forca: '100', agilidade: '70', inteligencia:'80', beleza:'100'},
    {cod:5, nome:'Venelope', desenho:'Detona Half', forca: '20', agilidade: '100', inteligencia:'100', beleza:'100'},
    {cod:6, nome:'Homem de ferro', desenho:'Os Vingadores', forca: '90', agilidade: '60', inteligencia:'100', beleza:'70'},
    {cod:7, nome:'Wanda', desenho:'Os Vingadores', forca: '100', agilidade: '60', inteligencia:'100', beleza:'100'}
  ];
}
