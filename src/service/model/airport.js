export const getAllAirports = client => {
  try {
    client.query(
      `select * from aeropuerto`,
      (error, results) => {
        if (error) {
          throw error
        }
        console.log(results.rows)
        return results.rows 
      }
    )
  } catch (err) {
    return err
  }
}
