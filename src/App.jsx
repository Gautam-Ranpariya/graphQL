import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_SPACEX = gql`
  query ExampleQuery($offset: Int, $limit: Int) {
    company {
      ceo
    }
    launches(offset: $offset, limit: $limit) {
      details
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      mission_name
      rocket {
        rocket_name
        rocket {
          id
          height {
            feet
          }
          name
          company
          country
          description
        }
      }
    }
  }
`;
const App = () => {
  const [variables, setVariables] = useState({
    limit: 20,
    offset: 1,
  });

  const { loading, error, data } = useQuery(GET_SPACEX, {
    variables: variables,
  });

  console.log("datadatadatadata", data);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <button
            onClick={() => {
              setVariables({
                ...variables,
                offset: variables.offset + 1,
              });
            }}
          >
            Set New Records
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
