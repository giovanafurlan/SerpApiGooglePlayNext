import { Box, Button, Divider, Flex, Heading, Input, Link, Select, Skeleton, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FaFilter } from 'react-icons/fa'
import { FaGooglePlay } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { BiCategory } from "react-icons/bi";
import $ from "jquery";

const Home: NextPage = () => {

  $('#searchTerm').on('change', function limpar() {

    $("#table1 tr").remove();
    $("#table2 tr").remove();

})

function consulta() {
    var sea = document.getElementById("searchTerm");

    organic(sea.value);
    item(sea.value);
}

function organic(consulta) {

    console.log("Início da requisição");

    var url =
        "https://serpapi.com/search.json?engine=google_play&q=" + consulta +
        "&gl=br&hl=pt-br&store=apps&api_key=6681352881f290db8ec410f05bc6b9567276022001ad7812884fbac446d342d9";

    $.ajax({
        url: url,
        crossDomain: true,
        type: "GET",
        dataType: "json",
        success: function (data) {

            //organic_results

            for (var i = 0; i < data.organic_results.length; i++) {
                var linhaData = data.organic_results[i];

                if (i == 0) {
                    var linha = tabela.insertRow(0);
                } else {
                    var linha = tabela.insertRow();
                }

                var l = 0;
                var nome = linha.insertCell(l++);
                nome.innerHTML = linhaData.title;
            }
        }
    });
}

function item(consulta) {

    console.log("Início da requisição");

    var url =
        "https://serpapi.com/search.json?engine=google_play&q=" + consulta +
        "&gl=br&hl=pt-br&store=apps&api_key=6681352881f290db8ec410f05bc6b9567276022001ad7812884fbac446d342d9";

    var tabela = document.getElementById("table2");

    $.ajax({
        url: url,
        crossDomain: true,
        type: "GET",
        dataType: "json",
        success: function (data) {

            //organic_results.items

            for (var i = 0; i < data.organic_results.length; i++) {
                var linhaData = data.organic_results[i].items;

                if (i == 0) {
                    var linha = tabela.insertRow(0);
                } else {
                    var linha = tabela.insertRow();
                }

                var l = 0;
                var nome = linha.insertCell(l++);
                nome.innerHTML = linhaData.title;
            }
        }
    });
}

  return (
    <Box bg="#edf2f7">
      <Heading ml="1vw" mb="1vw" fontWeight={400}>Google Play Store</Heading>
      <Box fontSize="xl"  bg="white" >
        <Box p="1vw">
          <Flex>
            <Text fontSize='lg' mb="1vw">Search</Text>
            <Text fontSize='md' color="red" mb="1vw">*</Text>
          </Flex>
          <Input id="searchTerm" noOfLines={1} w="20vw" placeholder='Type here' bg="white" color="var(--chakra-colors-gray-500)"/>
          <Button bg='#319795' color="white" mt="1vw">Submit</Button>  
        </Box>  
        <Flex ml="1vw" mt="1vw">
        <FaFilter/>
        <Text fontSize='lg' fontWeight={600} >Filters</Text>
        </Flex>
        <Box float="left" borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="#edf2f7" m="1vw">
          <Flex m="1vw">
            <GoLocation/>
            <Text fontSize='lg' noOfLines={1} ml="10px">Localization</Text>
          </Flex>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Country</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
          <Box backgroundColor="#fff"  mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Language</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
        </Box>
        <Box float="left" borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="#edf2f7" m="1vw">
        <Flex m="1vw">
            <BiCategory/>
            <Text fontSize='lg' noOfLines={1} ml="10px">Play Store Categories</Text>
          </Flex>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Store</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Apps Category</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Movies Category</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Books Category</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Age</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
        </Box>
        <Box float="left" borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor="#edf2f7" m="1vw">
        <Flex m="1vw">
            <FaGooglePlay/>
            <Text fontSize='lg' noOfLines={1} ml="10px">Advanced Parameters</Text>
          </Flex>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Chart</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
          <Box backgroundColor="#fff" mb="1vw">
            <Text fontSize='md' noOfLines={1} ml="1vw">Price</Text>
            <Select placeholder='Select option' id="sales_id" w={80} fontSize="md" borderRadius='lg' color="var(--chakra-colors-gray-500);">
              <option value="" id="period_id"></option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
