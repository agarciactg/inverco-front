import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { searchRestaurants } from "services/restaurantService";

function Dashboard() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchRestaurants(query, location);
      setResults(response.data.results);
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Contenedor de Búsqueda */}
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <MDInput
              type="text"
              label="Consulta (Ej: Pizza)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Grid>
          <Grid item>
            <MDInput
              type="text"
              label="Ubicación (Ej: Cartagena)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item>
            <MDButton variant="gradient" color="info" onClick={handleSearch}>
              Buscar
            </MDButton>
          </Grid>
        </Grid>

        {/* Lista de Resultados */}
        <MDBox mt={4}>
          <Typography variant="h5" gutterBottom textAlign="center">
            Resultados de la Búsqueda
          </Typography>

          {results.length === 0 ? (
            <Typography variant="body1" textAlign="center">
              No hay resultados disponibles
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {results.map((place) => (
                <Grid item xs={12} sm={6} md={4} key={place.place_id}>
                  <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    {/* Imagen del restaurante (si existe) */}
                    {place.photos && place.photos.length > 0 && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=TU_API_KEY`}
                        alt={place.name}
                      />
                    )}

                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {place.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        📍 {place.formatted_address}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ⭐ {place.rating} ({place.user_ratings_total} reseñas)
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
