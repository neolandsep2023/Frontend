import { useState } from "react";
import { FlexDir, Pagination } from "../components/StyleComponents";

export const usePaginacion = (num) => {
  const [galeriaItems, setGaleriaItems] = useState([]);
  const itemsPerPage = num||6;
  const [currentPage, setCurrentPage] = useState(1);

  const currentItems = galeriaItems?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // Calcular el número total de páginas => elementos en la res / elementos que queremos x pagina = paginas que necesitamos
  const totalPages = Math.ceil((galeriaItems?.length || 0) / itemsPerPage);

  // nextPage => pasa de página cuando le das al botón (siempre que no estemos en la última)
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const setPage = (pageNum) =>{
    if( currentPage != pageNum){
      setCurrentPage(pageNum)
    }

  }

  // prevPage => vuelve a la página anterior cuando le das al botón (siempre que no estés en la 1a)
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    ComponentPaginacion: () => (
      <>


     <FlexDir width={"100vw"} gap={"2px"} margin={"4px"} height={"40px"}>
      <Pagination variant="normal" onClick={() => {
              prevPage()}}><span className="material-symbols-outlined">
chevron_left
</span></Pagination>
<Pagination onClick={()=>setPage(1)} variant={ currentPage === 1 ? "clicked" : "normal"}>1</Pagination>
<Pagination onClick={()=>setPage(2)} variant={ currentPage === 2 ? "clicked" : "normal"}>2</Pagination>
<Pagination onClick={()=>setPage(3)} variant={ currentPage === 3 ? "clicked" : "normal"} >3</Pagination>
<Pagination onClick={()=>setPage(4)} variant={ currentPage === 4 ? "clicked" : "normal"} >4</Pagination>
<Pagination variant="disabled" >...</Pagination>
<Pagination onClick={()=>setPage(totalPages)} variant={ currentPage === totalPages ? "clicked" : "normal"}>{totalPages}</Pagination>


      <Pagination variant="normal" onClick={() => {
              nextPage()}}><span className="material-symbols-outlined">
chevron_right
</span></Pagination>
</FlexDir>


      </>
    ),
    dataPag: currentItems,
    setGaleriaItems,
    itemsPerPage
  };}