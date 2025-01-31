import { useState, useEffect } from "react";
import moment from "moment";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getHistory } from "services/historyService";

function Overview() {
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Definimos las columnas dinámicamente
  const columns = [
    { id: "id", label: "ID", width: "10%" },
    { id: "query", label: "Consulta", width: "30%" },
    { id: "location", label: "Ubicación", width: "30%" },
    { id: "created_at", label: "Fecha de Creación", width: "30%" }
  ];

  const fetchData = async (url = null) => {
    setLoading(true);
    try {
      const response = await getHistory(url);
      setData(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2}>
        <MDTypography variant="h4" mb={2}>
          Historial de Búsquedas
        </MDTypography>

        {loading ? (
          <MDTypography>Cargando...</MDTypography>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%" }}>
                {/* Encabezado de la Tabla */}
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align="center"
                        sx={{ width: column.width, fontWeight: "bold", textAlign: "center" }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                {/* Cuerpo de la Tabla */}
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      {columns.map((column) => (
                        <TableCell
                          key={`${item.id}-${column.id}`}
                          align="center"
                          sx={{ textAlign: "center" }}
                        >
                          {column.id === "created_at"
                            ? moment(item[column.id]).format("YYYY-MM-DD HH:mm:ss")
                            : item[column.id] || "N/A"}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Botones de paginación */}
            <MDBox mt={2} display="flex" justifyContent="space-between">
              <MDButton
                disabled={!prevPage}
                onClick={() => fetchData(prevPage)}
                startIcon={<ArrowBackIcon />}
              >
                Anterior
              </MDButton>
              <MDButton
                disabled={!nextPage}
                onClick={() => fetchData(nextPage)}
                endIcon={<ArrowForwardIcon />}
              >
                Siguiente
              </MDButton>
            </MDBox>
          </>
        )}
      </MDBox>
    </DashboardLayout>
  );
}

export default Overview;
