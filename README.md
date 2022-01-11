# feature-bsale-test-gonzalo-guzman

<h2>API REST - BSALE - Gonzalo Guzman</h2>

<p>Previamente se recomienta generar en DNS local test.gonzalo.cl al 127.0.0.1 o modificar este falor en las variables de entorno del proyecto por las que tu deseas agregar.</p>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  <tr>
    <td>GET</td>
    <td>http://test.gonzalo.cl:9001/api</td>
    <td>Endpoint obtiene todos los productos y categorias</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://test.gonzalo.cl:9001/api/categorias/6</td>
    <td>Endpoint obtiene listado de productos por categoria</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>http://test.gonzalo.cl:9001/api --body { "name": "carmen" }</td>
    <td>Endpoint para filtrar productos</td>
  </tr>
</table>

<h2>Para iniciar el proyecto<h2>

<p>Comando para partir el proyecto</p>
<code>npm run start</code>
