<template>
  <section id="decisoes" class="decisoes">
    <div class="container">
      <div id="biob" class="section-bredcumbs">
        <h5>
          Onde estou?
          <router-link style="text-decoration: none" to="/">
            <b>Página Inicial</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/formularios">
            <b>Formulários</b>
          </router-link>
          <b> > </b>
          <router-link style="text-decoration: none" to="/formscctv">
            <b>Formulário de Tratamento de Dados Geral </b>
          </router-link>
        </h5>
      </div>
      <Form @submit="submitForm" >
      <div class="section-title">
        <h2>NOTIFICAÇÃO DE TRATAMENTO DE DADOS</h2>
      </div>
      <!-- FORMS GERAL-->
      
      <div class="col-md-12" id="divg">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <label id="labelleft" for="TipoNot" class="form-label"
                >Tipo Notificação</label
              >
            </div>
            <div class="col-md-10">
              <Field
                  name="tipoNotificacao"
                  as="select"
                  class="form-select"
                  v-model="tipoNotificacao"
                  :rules="validateRadio"
                >
                  <option value="">- selecione o tipo de Notificação -</option>
                  <option
                    v-for="tipoNotificacao in tipoNotificacoes"
                    :key="tipoNotificacao.value"
                    :value="tipoNotificacao.value"
                  >
                    {{ tipoNotificacao.value }}
                  </option>
                </Field>
                <ErrorMessage class="errorMessage" name="tipoNotificacao" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12" id="divg">
        <div class="container">
          <div class="row">
            <div class="col-md-12" id="separacao">
              1. Responsável pelo Tratamento
            </div>
          <div class="col-md-12"><br></div>
           <div class="col-md-4"></div>
           <div class="col-md-2">
                <Field
                  :rules="validateRadio"
                  type="radio"
                  id="tipoPessoa"
                  name="tipoPessoa"
                  value="Pessoa Singular"
                  v-model="tipoPessoa"
                />
                <label for="Pessoa Singular"> Pessoa Singular</label>
              </div>
              <div class="col-md-2">
                <Field
                  :rules="validateRadio"
                  type="radio"
                  id="tipoPessoa"
                  name="tipoPessoa"
                  value="Pessoa Coletiva"
                  v-model="tipoPessoa"
                />
                <label for="Pessoa Coletiva"> Pessoa Coletiva</label>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-12" id="alignCenter">
                <ErrorMessage class="errorMessage" name="tipoPessoa" />
              </div>
           
            <div class="col-md-12">
              <Field
                name="nomedenominacao"
                v-model="nome_denominacao"
                type="text"
                class="form-control"
                id="nomedenominacao"
                alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada"
                placeholder=" Nome/Denominação"
                :rules="validateText"
              />
              <ErrorMessage class="errorMessage" name="nomedenominacao"/>
            </div>
            <div class="col-md-12">
              <input
                name="nomecomercial"
                type="text"
                v-model="nome_comercial"
                class="form-control"
                id="nomecomercial"
                alt="Nome comercial: Pode ser a sigla ou designação em relação ao qual a instituição é mais conhecida."
                placeholder=" Nome/Comercial"
               
              />
              
            </div>
            <div class="col">
                <!--
              <Field
                  as="select"
                  name="atividadeDesenvolvida"
                  v-model="atividade_desenvolvida"
                  class="form-select"
                  aria-label="Default select example"
                  :rules="validateRadio"
                >
                  <option value="">- Escolha a actividade desenvolvida-</option>
                  <option v-for="atividade in atividades"  :key="atividade.value"
                    :value="atividade.value">
                    {{ atividade.value }}
                  </option>
                </Field>
                <ErrorMessage
                  class="errorMessage"
                  name="atividadeDesenvolvida"
                />
                -->
               
                <Field
                  name="atividadeDesenvolvida"
                  as="select"
                  class="form-select"
                  v-model="atividadeDesenvolvida"
                  :rules="validateRadio"
                >
                  <option value="">selecione a atividade desenvolvida</option>
                  <option
                    v-for="atividadeDesenvolvida in atividadesDesenvolvidas"
                    :key="atividadeDesenvolvida.value"
                    :value="atividadeDesenvolvida.value"
                  >
                    {{ atividadeDesenvolvida.value }}
                  </option>
                </Field>
                <ErrorMessage
                  class="errorMessage"
                  name="atividadeDesenvolvida"
                />
             
              </div>
            <div class="col">
              <Field
                name="nif"
                type="number"
                class="form-control"
                id="nif"
                alt="NIF"
                v-model="numero_nif"
                placeholder="Número de NIF"
                :rules="validateNumber" 
              />
              <ErrorMessage class="errorMessage" name="nif" />
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col">
                  <input
                    name="rua"
                    type="text"
                    class="form-control"
                    id="rua"
                    v-model="rua_responsavel_tratamento"
                    alt="RUA"
                    placeholder="Entre o nome da Rua"
                    
                  />
                  
                </div>
                <div class="col">
                  <Field
                    name="local"
                    type="text"
                    class="form-control"
                    id="local"
                    alt="Local"
                    v-model="local_responsavel_tratamento"
                    placeholder="Cidade/Vila/Lugar/Zona"
                    :rules="validateText"
                  />
                  <ErrorMessage class="errorMessage" name="local" />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col">
                  <Field
                    as="select"
                    name="ilhaResp"
                    class="form-select"
                    v-model="ilhaResp"
                    id="ilhaResp"
                    for="ilhaResp"
                    
                    :rules="validateRadio"

                  >
                   <option value="">- selecione uma ilha -</option>
                    <option
                      v-for="ilha in ilhas"
                      :key="ilha.value"
                      :value="ilha.value"
                    >
                      {{ ilha.label }}
                    </option>
                  </Field>
                  <ErrorMessage class="errorMessage" name="ilhaResp" />
                </div>
                <div class="col">
                  <Field
                      as="select"
                      class="form-select"
                      v-model="concelhoResp"
                      name="concelhoResp"
                      id="concelhoResp"
                      for="concelhoResp"
                      placeholder="- Seleciona um concelho -"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="option in concelhos[ilhaResp]"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </Field>
                  <ErrorMessage class="errorMessage" name="concelhoResp" />
                  
                </div>
              </div>
            </div>
            <div class="col-md-12" id="divloco">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    id="caixapostal"
                    alt="Caixa Postal"
                    v-model="caixapostal_responsavel_tratamento"
                    placeholder="Entre o número da Caixa Postal"
                  />
                </div>
                <div class="col">
                  <Field
                    name="telefone"
                    type="number"
                    class="form-control"
                    id="telefone"
                    alt="Telefone/Telemovel"
                    v-model="telefone_responsavel_tratamento"
                    placeholder="Contato: Telefone/Telemovel"
                    :rules="validateNumber"
                  />
                  <ErrorMessage class="errorMessage" name="telefone" />
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col">
                  <Field
                    name="email"
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email_responsavel_tratamento"
                    placeholder="Entre o seu email: example@cnpd.cv"
                    :rules="validateEmail"
                  />
                  <ErrorMessage class="errorMessage" name="email" />
                </div>
               <div class="col">
                    <div class="col">
                      <Field
                        :rules="validateText"
                        type="radio"
                        id="paisResp"
                        name="paisResp"
                        value="Cabo Verde"
                        v-model="paisResp"
                      />
                      <label for="Pessoa Singular"> Cabo Verde</label>
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateText"
                        type="radio"
                        id="paisResp"
                        name="paisResp"
                        value=" Fora do Território Nacional"
                        v-model="paisResp"
                      />
                      <label for=" Fora do Território Nacional">
                        Fora do Território Nacional</label
                      >
                    </div>
                    <ErrorMessage class="errorMessage" name="paisResp" />
                 
                  </div>
                  
              </div>
            </div>
            <div class="col-md-12">
              <Field
                name="Representante"
                type="text"
                class="form-control"
                id="Representante"
                v-model="nome_representante_tratamento"
                placeholder=" Representante"
                :rules="validateText"
              />
              <ErrorMessage class="errorMessage" name="Representante" />
            </div>
            
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                id="Rua"
                v-model="rua_representante_tratamento"
                placeholder=" Rua"
              />
            </div>
            <div class="col-md-12">
              <input
                type="text"
                class="form-control"
                id="caixapostal"
                v-model="caixapostal_representante_tratamento"
                placeholder=" Caixa Postal"
                
              />
            </div>
            <div class="col-md-12">
              <Field
                name="cidadeRepre"
                type="text"
                class="form-control"
                id="cidade"
                v-model="local_representante_tratamento"
                placeholder=" Cidade/Vila/Lugar/Zona"
                :rules="validateText"
              />
              <ErrorMessage class="errorMessage" name="cidadeRepre" />
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col">
                  <Field
                    as="select"
                    class="form-select"
                    v-model="ilhaRepre"
                    name="ilhaRepre"
                    id="ilhaRepre"
                    for="ilhaRepre"
                    
                    :rules="validateRadio"
                  >
                   <option value="">- selecione uma ilha -</option>
                    <option
                      v-for="ilha in ilhas"
                      :key="ilha.value"
                      :value="ilha.value"
                    >
                      {{ ilha.label }}
                    </option>
                  </Field>
                  <ErrorMessage class="errorMessage" name="ilhaRepre" />
                </div>
                <div class="col">
                  <Field
                    as="select"
                    class="form-select"
                    v-model="concelhoRepre"
                    name="concelhoRepre"
                    id="concelhoRepre"
                    for="concelhoRepre"
                    placeholder="- Seleciona um concelho -"
                    :rules="validateRadio"
                  >
                    <option value="">- selecione um concelho -</option>
                    <option
                      v-for="concelho in concelhos[ilhaRepre]"
                      :key="concelho.value"
                      :value="concelho.value"
                    >
                      {{ concelho.label }}
                    </option>
                  </Field>
                  <ErrorMessage class="errorMessage" name="concelhoRepre" />
                  
                </div>
              </div>
            </div>
            <div class="col-md-12" id="divloco">
              <Field
                name="nomepessoacontato"
                type="text"
                class="form-control"
                id="nomepessoacontato"
                v-model="nome_pessoa_contato"
                placeholder=" Nome da pessoa do contato"
                :rules="validateText"
              />
              <ErrorMessage class="errorMessage" name="nomepessoacontato" />
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col">
                  <Field
                    name="emailRepre"
                    type="email"
                    class="form-control"
                    id="emailRepre"
                    v-model="email_representante_tratamento"
                    alt="Caixa Postal"
                    placeholder="Entre o seu email: example@cnpd.cv"
                    :rules="validateEmail"
                  />
                  <ErrorMessage class="errorMessage" name="emailRepre" />
                </div>
                <div class="col">
                  <Field
                    name="telefoneRepre"
                    type="number"
                    class="form-control"
                    id="telefone"
                    v-model="telefone_representante_tratamento"
                    alt="Telefone/Telemovel"
                    placeholder="Contato: Telefone/Telemovel"
                    :rules="validateNumber"
                  />
                  <ErrorMessage class="errorMessage" name="telefoneRepre" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---- ----------------- Processamento da informação--------------------------------------------------------------------->
      <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                Processamento da informação
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Existe um Serviço Externo encarregado do processamento?
                </label>
                <buttom
                  @click="changeServico"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkServico ? "Não" : "Sim" }}
                </buttom>
              </div>

            <div class="col-md-12"   v-if="checkServico">
              <div class="col-md-12">
                <Field
                  type="text"
                  class="form-control"
                  name="entidadeProcessInfo"
                  id="entidadeProcessInfo"
                  v-model="entidade_processamento_informacao"
                  placeholder=" Qual a Entidade Encarregue pelo processamento dos dados"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="entidadeProcessInfo" />
              </div>
              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="ruaProcessInfo"
                  id="ruaProcessInfo"
                  v-model="rua_entidade_processamento"
                  placeholder=" Rua"
                />
                <ErrorMessage class="errorMessage" name="ruaProcessInfo" />  
                </div>
                <div class="col-md-12">
                  <input
                  
                  type="text"
                  class="form-control"
                  name="caixaPostalProcessInfo"
                  id="caixaPostalProcessInfo"
                  v-model="caixapostal_entidade_processamento"
                  placeholder=" Caixa Postal"
                />
              </div>
              <div class="col-md-12">
                <Field
                  type="text"
                  class="form-control"
                  name="lugarProcessInfo"
                  id="lugarProcessInfo"
                  v-model="local_entidade_processamento"
                  placeholder="Cidade/Vila/Lugar/Zona da Entidade"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="lugarProcessInfo" />
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="ilhaServExt"
                      name="ilhaProcessInfo"
                      id="ilhaProcessInfo"
                      for="ilhaProcessInfo"
                      
                      :rules="validateRadio"
                    >
                      <option value="">- selecione uma ilha -</option>
                      <option
                        v-for="ilha in ilhas"
                        :key="ilha.value"
                        :value="ilha.value"
                      >
                        {{ ilha.value }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="ilhaProcessInfo" />
                  </div>
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="concelhoServExt"
                      name="concelhoProcessInfo"
                      id="concelhoProcessInfo"
                      for="concelhoProcessInfo"
                      placeholder="- Seleciona um concelho -"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="concelho in concelhos[ilhaServExt]"
                        :key="concelho.value"
                        :value="concelho.value"
                      >
                        {{ concelho.value }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoProcessInfo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <!---- ----------------- FINALIDADE DO TRATAMENTO-------------------------------------------------------------------->
        <!---- ----------------- FINALIDADE DO TRATAMENTO-------------------------------------------------------------------->
         
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  2. Finalidade do tratamento 
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label class="form-check-label">
                  Descrição da finalidade (indique uma das opções indicadas). Se
                  tiver mais do que uma categoria de finalidades a serem
                  tratados clique no botão abaixo para adicionar mais campos.
                </label>
                <div class="col-md-12">
                  <button
                    @click="addFinalidd()"
                    alt="Adicionar mais campos"
                    type="button"
                    id="addmore"
                    class="btn btn-success"
                  >
                    <b class="add"
                      ><IconAwe class="icon-color" icon="plus"
                    /></b>
                  </button>
                  <div class="col-md-12"><br /></div>

                  <label for="categorias">
                    Selecione uma Categoria abaixo</label
                  >
                  <div
                    class="row"
                    v-for="(finalidadi, index) in finalidadiCategory"
                    :key="index"
                  >
                    <div class="col-md-4" id="cambs">
                      <Field 
                        :name="'categoria ' + (index + 1)"  
                        as="select"
                        class="form-select" 
                        :rules="validateRadio" 
                        v-model="finalidadi.categoria" 
                        :id="'categoria ' + (index + 1)" 
                        for="categoria"
                        placeholder="- Seleciona uma categoria-"
                      >
                        <option value=""> - selecione uma categoria -</option>
                        <option
                          v-for="categoria in categorias"
                          :key="categoria.id"
                          :value="categoria.value"
                        >
                          {{ categoria.label }}
                        </option>
                      </Field>
                      <ErrorMessage class="errorMessage" :name="'categoria ' + (index + 1)" />
                       </div>
                    <div class="col-md-7" id="cambs">
                      <Multiselect
                        v-model="finalidadi.finalidade"
                        :name="'finalidade ' + (index + 1)"   
                        :options="finalidadesCategorias[finalidadi.categoria]"
                        mode="tags"
                        placeholder="- selecione as finalidades -"
                        :close-on-select="true"
                        :searchable="true"
                        :object="true"
                        :multiple="true"
                        :rules="validateRadio" 
                      />
                      <ErrorMessage class="errorMessage" :name="'finalidadi.finalidade ' + (index + 1)" />
                      
                    </div>
                    <div class="col-md-1">
                      <button
                        @click="removeFinalidd(index)"
                        v-show="index != 0"
                        type="button"
                        id="removeItem"
                        class="btn btn-danger"
                      >
                        <b class="add"
                          ><IconAwe class="icon-color" icon="trash-can"
                        /></b>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-12"><br /></div>
                  <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label"
                  for="formaDireitoAcesso"
                >
                  Caso a sua finalidade de tratamento não se encontre na lista, introduza a sua finalidade no campo a seguir
                </label>
                <Field
                  name="outraFinalidadeTratamento"
                  as="textarea"
                  class="form-control"
                  v-model="outraFinalidadeTratamento"    
                  placeholder="  Caso a sua finalidade de tratamento não se encontre na lista, introduza a sua finalidade no campo a seguir
               "
                /> 
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!--    ************** DADOS PESSOAIS CONTIDOS EM CADA REGISTRO DADOS TRATADOS  -->

     <div class="col" id="divg">

        <div class="container">
          <div class="row">
            <div class="col-md-12" id="divloco">
              <div class="col-md-12" id="separacao">
                3. Dados pessoais contidos em cada registro
              </div>
            </div>
            <div class="col-md-12"><br /></div>
            <div class="col-md-12">
              <label
                id="labelleft"
                class="form-check-label"
                for="formaDireitoAcesso"
              >
                Indique quais são os dados pessoais tratados, se não faz
                tratamento de nenhum desses dados não preencha este campo.
              </label>
              <Multiselect
                
                v-model="dadosPessoaisTratado"
                :options="dadospessoaisTratados"
                mode="tags"
                placeholder="- selecione os dados pessoais tratados -"
                :close-on-select="true"
                :searchable="true"
                :object="true"
                :multiple="true"
                
               
              />
               
              <p v-if="error">{{ error }}</p>
            </div>
            <div class="col-md-12"><br /></div>
            <div class="col-md-12">
              <label
                id="labelleft"
                class="form-check-label"
                for="formaDireitoAcesso"
              >
                Que outros dados referentes aos artigos 8º e 11º
              </label>
              <Field
                as="textarea"
                class="form-control"
                name="outrosDadosArt8e11"
                id="outrosDadosArt8e11"
                v-model="outros_dados_tratados_8_11"
                placeholder=" Mencionar quais os outros dados tratados referentes aos artigos 8º e 11º da lei nº. 121/IX/2021 de 17 de março "
                :rules="validateText"
              ></Field>
              <div class="col-md-12"><br /></div>
              <label
                id="labelleft"
                class="form-check-label"
                for="formaDireitoAcesso"
              >
                Lista de dados pessoais tratados
              </label>
              <Field
                  name="listaDadosPessoaisTratados"
                  as="textarea"
                  class="form-control"
                  v-model="lista_dados_pessoais_tratados"
                  :rules="validateText"
                  placeholder=" Mencionar todos os dados pessoais tratados EX: nome, BI, NIF, Registo criminal, etc"
                 />
                <ErrorMessage class="errorMessage" name="listaDadosPessoaisTratados" />
            </div>
          </div>
        </div>
      </div>
    

      <!--    ***************************************** RECOLHA DE DADOS****************** -->

      <div class="col" id="divg">
        <div class="container">
          <div class="row">
            <div class="col-md-12" id="divloco">
              <div class="col-md-12" id="separacao">4. Recolha de Dados</div>
            </div>
            <div class="col-md-6">
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label"
                  for="formaDireitoAcesso"
                >
                  Recolha direta
                </label>
                <Multiselect
                  v-model="recolhaDireta"
                  :options="recolhaDiretas"
                  mode="tags"
                  placeholder="- selecione os meios de recolha direta dos dados -"
                  :close-on-select="true"
                  :searchable="true"
                  :object="true"
                  :multiple="true"
                />
              </div>
              
              <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label"
                  for="formaDireitoAcesso"
                >
                  URL
                </label>
                <input
                  class="form-control"
                  name="url"
                  id="url"
                  v-model="url_recolha"
                  placeholder=" introduza aqui a URL de recolha "
                />
                
                <label
                  id="labelleft"
                  class="form-check-label"
                  for="formaDireitoAcesso"
                >
                  Descreve a outra forma de recolha direta
                </label>
                <textarea
                  class="form-control"
                  name="OutraFormaRecolhaDireta"
                  id="OutraFormaRecolhaDireta"
                  v-model="descricao_outra_forma_recolhadireta"
                  placeholder=" Descreve a outra forma de recolha direta"
                ></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col-md-12"><br /></div>
              <label
                id="labelleft"
                class="form-check-label"
                for="formaDireitoAcesso"
              >
                Recolha Indireta
              </label>
              <textarea
                class="form-control"
                name="listaDadosPessoaisTratados"
                id="listaDadosPessoaisTratados"
                v-model="recolha_indireta"
                placeholder=" Mencione as formas de recolha indireta caso houver"
                rows="8"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

       <!---- ----------------- Comunicaçao dos dados a terceiros-------------------------------------------------------------------->

      <!---- ----------------- Comunicaçao dos dados a terceiros-------------------------------------------------------------------->
      <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  5. Comunicação dos Dados a terceiros  
                </div>
              </div>
              <div class="col">
                <label class="form-check-label">
                  Existe comunicação de dados a terceiros?
                </label>
                <buttom
                  @click="changeComunicTerce"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkComunicTerce ? "Não" : "Sim" }}
                </buttom>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12" v-if="checkComunicTerce">
                <label for="formFile" class="form-label"
                  >Se sim, indique as entidades a quem são comunicados os dados
                  e motivos da comunicação. Se tiver mais do que uma entidade
                  clique no botão abaixo para adicionar mais campos.
                </label>
                <div class="col-md-12">
                  <button
                    @click="addComunicTerce()"
                    alt="Adicionar mais campos"
                    type="button"
                    id="addmore"
                    class="btn btn-success"
                  >
                    <b class="add"
                      ><IconAwe class="icon-color" icon="plus"
                    /></b>
                  </button>
                  <div class="col-md-12"><br /></div>

                  <div
                    class="row"
                    v-for="(comunica, index) in comunicacao"   
                    :key="index"
                  >
                    <div class="col-md-3">
                      <Field  
                        class="form-control" 
                        :rules="validateText"
                        v-model="comunica.entidadesComunicadas" 
                        :name="'entidadesComunicadas ' + (index + 1)"  
                        id="entidadesComunicadas"
                        :placeholder="
                          +(index + 1) +
                          'ª- Entidade para onde os dados são comunicados '
                        " />
                <ErrorMessage class="errorMessage"  :name="'entidadesComunicadas ' + (index + 1)"  />
                       
                    </div>
                    <div class="col-md-4">
                      <Field  
                       class="form-control" 
                       :rules="validateText"
                        v-model="comunica.condicoesComunicacao"
                        :name="'condicoesComunicacao ' + (index + 1)"
                        id="condicoesComunicacao"
                        :placeholder="'Quais  as condições de comunicação '"
                        />
                <ErrorMessage class="errorMessage"  :name="'condicoesComunicacao ' + (index + 1)" />
                   
                         </div>
                         <div class="col-md-4">
                      <Field  
                       class="form-control" 
                       :rules="validateText"
                        v-model="comunica.dadosTransferidos"
                        :name="'dadosTransferidos ' + (index + 1)"
                        id="dadosTransferidos"
                        :placeholder="'Quais  são os dados transferidos '"
                        />
                <ErrorMessage class="errorMessage"  :name="'dadosTransferidos ' + (index + 1)" />
                   
                         </div>
                    <div class="col-md-1">
                      <button
                        @click="removeComunic(index)"
                        v-show="index != 0"
                        type="button"
                        id="removeItem"
                        class="btn btn-danger"
                      >
                        <b class="add"
                          ><IconAwe class="icon-color" icon="trash-can"
                        /></b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      <!--    ************** INTERCONEXOES  -->
      <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                6. Interconexões
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Existe interconexões de tratamentos?
                </label>
                <buttom
                  @click="changeInterconexoes"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkInterconexoes ? "Não" : "Sim" }}
                </buttom>
              </div>
              
              <div class="col-md-12"><br></div>
            <div class="col-md-12"   v-if="checkInterconexoes">
               
              <div class="col-md-12"> 
                <Field
                 as="textarea"
                  class="form-control"
                  name="descreverFinalidade"
                  id="descreverFinalidade"
                  v-model="descricao_finalidade_interconexao"
                  placeholder=" Descreve a finalidade, tipos de dados objecto de interconexão e os responsáveis pelo tratamento"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="descreverFinalidade" />
              </div> 
            </div>
          </div>
        </div>
      </div> 
      <!---- ----------------- Transferencia internacional dos dados-------------------------------------------------------------------->

      <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  7. Fluxos internacionais de dados para outros países  
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Existe fluxos para fora do Território Nacional?
                </label>
                <buttom
                  @click="changeTransfInter"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkTransfInter ? "Não" : "Sim" }}
                </buttom>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12" v-if="checkTransfInter">
                <label for="formFile" class="form-label"
                  >Listagem das entidades e respetivos países para onde há
                  transmissão de dados e quais os dados transferidos. Se tiver
                  mais do que uma entidade clique no botão abaixo para adicionar
                  mais campos.
                </label>
                <div class="col-md-12">
                  <button
                    @click="addTransfInter()"
                    alt="Adicionar mais campos"
                    type="button"
                    id="addmore"
                    class="btn btn-success"
                  >
                    <b class="add"
                      ><IconAwe class="icon-color" icon="plus"
                    /></b>
                  </button>
                  <div class="col-md-12"><br /></div>

                  <div
                    class="row"
                    v-for="(inter, index) in internacional"
                    :key="index"
                  >
                    <div class="col-md-3">
                      <Field  
                      class="form-control" 
                      :rules="validateText"
                      v-model="inter.entidadesInternacional" 
                      :name="'entidadesInternacional ' + (index + 1)"
                      id="entidadesInternacional"
                      :placeholder="
                          +(index + 1) +
                          'ª- Entidade para onde os dados são transferidos '
                        "
                        />
                <ErrorMessage class="errorMessage" :name="'entidadesInternacional ' + (index + 1)" />
                       </div>
                    <div class="col-md-2">
                      <Field  
                         class="form-control" 
                        :rules="validateText"
                         v-model="inter.paisTransferido" 
                        :name="'paisTransferido ' + (index + 1)"
                        id="paisTransferido"
                        :placeholder="
                          +(index + 1) + 'º- País de Transferência '
                        "
                        />
                <ErrorMessage class="errorMessage" :name="'paisTransferido ' + (index + 1)" />
                      
                    </div>
                    <div class="col-md-3">
                      <Field  
                      class="form-control" 
                      :rules="validateText"
                      v-model="inter.dadosTransferidosInt" 
                      :name="'dadosTransferidosInt ' + (index + 1)"
                      id="dadosTransferidosInt"
                      :placeholder="'Quais são os Dados que são transferidos '"
                        />
                <ErrorMessage class="errorMessage"  :name="'dadosTransferidosInt ' + (index + 1)" />
                        </div>
  
                        <div class="col-md-3">
                      <Field  
                      class="form-control" 
                      :rules="validateText"
                      v-model="inter.fundamento" 
                      :name="'fundamento ' + (index + 1)"
                      id="fundamento"
                      :placeholder="'Quais os fundamentos da transferencia'"
                        />
                <ErrorMessage class="errorMessage"  :name="'fundamento ' + (index + 1)" />
                        </div>

                    <div class="col-md-1">
                      <button
                        @click="removeInter(index)"
                        v-show="index != 0"
                        type="button"
                        id="removeItem"
                        class="btn btn-danger"
                      >
                        <b class="add"
                          ><IconAwe class="icon-color" icon="trash-can"
                        /></b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!---- ----------------- Prazo conservacao dos dados-------------------------------------------------------------------->

      <div class="col" id="divg">
        <div class="container">
          <div class="row">
            <div class="col-md-12" id="divloco">
              <div class="col-md-12" id="separacao">
                8. Prazo máximo de conservação dos Dados pessoais
              </div>
            </div>
            <div class="col-md-12"><br /></div>
            <div class="col-md-4">
              <label class="form-check-label">
                Qual o prazo máximo de conservação dos dados?
              </label>
            </div>
            <div class="col-md-8">
              <input
                type="text"
                class="form-control"
                name="prazoConserva"
                v-model="prazo_maximo_conservacao"
                id="caixaPostalPrprazoConservaocessInfoSR"
                placeholder=" Indique por quanto tempo os dados serão conservados"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                9.Exercício do direito de acesso
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">
                  <label class="form-check-label">
                    Morada do local do exercício do direito de acesso é a mesma
                    indicada em 1 ?
                  </label>
                  <buttom
                    @click="changeDireitoAcesso"
                    type="button"
                    class="btn btn-outline-primary"
                    name="morada"
                    id="moradasimbotton"
                  >
                    {{ checkDireitoAcesso ? "Sim" : "Não" }}
                  </buttom>
                </div>
                <div class="col-md-12"><br></div>
                <div class="col-md-12" v-if="checkDireitoAcesso">
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="ruaDireitoAcesso"
                      id="ruaDireitoAcesso"
                      v-model="rua_direito_acesso"
                      placeholder=" Rua"
                    />
                  </div>
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="caixaPostalDireitoAcesso"
                      id="caixaPostalDireitoAcesso"
                      v-model="caixapostal_direito_acesso"
                      placeholder=" Caixa Postal"
                    />
                  </div>
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="localDireitoAcesso"
                      id="localDireitoAcesso"
                      v-model="local_direito_acesso"
                      placeholder=" Local - Cidade/Vila/Lugar/Zona"
                    />
                  </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="ilhaDirAcess"
                        name="ilhaDirAcess"
                        id="ilhaDirAcess"
                        for="ilhaDirAcess"
                        :rules="validateRadio"
                        
                      >
                        <option value="">- selecione uma ilha -</option>
                        <option
                          v-for="ilha in ilhas"
                          :key="ilha.value"
                          :value="ilha.value"
                        >
                          {{ ilha.value }}
                        </option>
                      </Field>
                      <ErrorMessage class="errorMessage" name="ilhaDirAcess" />
                    </div>
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="concelhoDirAcess"
                        name="concelhoDirAcess"
                        id="concelhoDirAcess"
                        for="concelhoDirAcess"
                        :rules="validateRadio"
                      >
                        <option value="">- selecione um concelho -</option>
                        <option
                          v-for="concelho in concelhos[ilhaDirAcess]"
                          :key="concelho.value"
                          :value="concelho.value"
                        >
                          {{ concelho.value }}
                        </option>
                      </Field>
                      <ErrorMessage
                        class="errorMessage"
                        name="concelhoDirAcess"
                      />

 
                    </div>
                  </div>
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                        :rules="validateEmail"
                        type="email"
                        class="form-control"
                        name="emailDireitoAcesso"
                        id="emailDireitoAcesso"
                        v-model="email_direito_acesso"
                        placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="emailDireitoAcesso"
                      />   
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateNumber"
                        type="text"
                        class="form-control"
                        name="telefoneDireitoAcesso"
                        id="telefoneDireitoAcesso"
                        v-model="telefone_direito_acesso"
                        placeholder="Contato: Telefone/Telemovel"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="telefoneDireitoAcesso"
                      />   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                De que forma é exercido o direito de acesso?
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="checkbox"
                  id="formaDireitoAcesso"
                  name="formaDireitoAcesso"
                  value="Presencial"
                  v-model="formaDireitoAcesso"
                />
                <label for="formaDireitoAcesso"> Presencial</label>
              </div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="checkbox"
                  id="formaDireitoAcesso"
                  name="formaDireitoAcesso"
                  value="Escrita"
                  v-model="formaDireitoAcesso"
                />
                <label for="formaDireitoAcesso"> Escrita</label>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-12" id="alignCenter">
                <ErrorMessage class="errorMessage" name="formaDireitoAcesso" />
              </div>

              <div class="col-md-12">
                <Field
                  name="outraFormaDireitoAcesso"
                  as="textarea"
                  class="form-control"
                  v-model="outrasformas_direito_acesso" 
                  placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"
                /> 
              </div>
            </div>
          </div>
        </div>
  
      <div class="col" id="divg">
        <div class="container">
          <div class="row">
            <div class="col-md-12" id="divloco">
              <div class="col-md-12" id="separacao">
                10. Medidas de segurança a implementar
              </div>
            </div> 
            
            <div class="col-md-12"><br></div>
            <div class="col-md-12">
              <label
                id="labelleft"
                class="form-check-label"
                for="formaDireitoAcesso"
              >
                Especifique as medidas físicas de segurança do sistema:
              </label>
              <Field
                as="textarea"
                class="form-control"
                name="medidasFisica"
                id="outraFormaDireitoAcesso"
                v-model="medidade_seguranca_fisica" 
                placeholder="Ocorre quando temos barreiras físicas que impeçam que pessoas não autorizadas tenham acesso a espaços onde os dados estão guardados"
                :rules="validateText"
                
              ></Field>
              <ErrorMessage class="errorMessage" name="medidasFisica" />
            </div>
            <div class="col-md-12"><br /></div>
            <div class="col-md-12">
              <label
                id="labelleft"
                class="form-check-label"
                for="formaDireitoAcesso"
              >
                Especifique as medidas lógica de segurança do sistema:
              </label>
              <Field
                as="textarea"
                class="form-control"
                name="medidasLogica"
                id="outraFormaDireitoAcesso"
                v-model="medidas_seguranca_logica"
                placeholder=" Consiste na implementação de chaves de acesso, encriptação do conteúdo e registos de operações efectuadas no sistema"
                :rules="validateText"
              ></Field>
              <ErrorMessage class="errorMessage" name="medidasLogica" />
            </div>
          </div>
        </div>
      </div>
      <div class="col" id="divg">
        <div class="container">
          <div class="row">
            <div class="col-md-12" id="divloco">
              <div class="col-md-12" id="separacao">
                11. Representante dos trabalhadores
              </div>
            </div>  
            <div class="col">
              <div class="col">
                <label class="form-check-label">
                  Existe representante dos trabalhadores?
                </label>
                <buttom
                  @click="changeRepTrab"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkRepTrab ? "Não" : "Sim" }}
                </buttom>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12" v-if="checkRepTrab">
                <label for="formFile" class="form-label"
                  >Se sim, juntar a cópia do parecer ou comprovativo do
                  pedido.</label
                >
                <Field  accept="application/pdf" name="parecer_representante_trabalhadores"  v-model="parecer_representante_trabalhadores" type="file" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12"><br /></div>
      <div class="col-12" id="divsave">
          <button
            
            id="buttonsave"
            class="btn btn-primary"
            type="submit"
          >
          <IconAwe class="icon-color" icon="paper-plane"
                    /> Submeter Dados
          </button>
        </div>

          <!------------------MODAL SHOW ------------------------->
        <div v-show="showModal" class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <h5 class="modal-title" >
                  Atenção:
                  </h5>
                  <hr> 
                  <div class="modal-header" id="headermodal">
                     <img id="img" src="/img/success1.gif" class="center">
                  </div>
                  <p id="success">O seu formulário foi submetido com Sucesso.</p>   
                  <div class="modalFooter">
                    <button
                        @click="closeSuccess"
                        id="buttonsave"
                        class="btn btn-primary" 
                      >
                        <IconAwe class="icon-color" icon="circle-check" /> Fechar
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

            <div v-show="ErrorModal" class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <h5 class="modal-title" >
                  Atenção:
                  </h5>
                  <hr> 
                  <div class="modal-header" id="headermodal">
                     <img id="img" src="/img/error-img.gif" class="center">
                  </div>
                  <p id="error">O seu formulário não foi submetido.</p>
                  <p id="error1">Por favor tente novamente!</p>        
                  <div class="modalFooter">
                   <button
                        @click="closeError"
                        id="buttonsave"
                        class="btn btn-primary"
                      >
                        <IconAwe class="icon-color" icon="circle-check" /> Fechar
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
    </Form>
      <!-- FIM DE FORMS-->
    </div>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";
import { API_ENDPOINT } from "../main.js";


export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Multiselect,
    
  },
 
  name: "GeralForms",

  data() {
    return {
      checkMorada: false,
      checkServico: false,
      checkDireitoAcesso: false,
      checkRepTrab: false,
      checkInterconexoes:false,
      checkComunicTerce: false,
      checkTransfInter: false,
      atividadeDesenvolvida:"",
      nome_denominacao:"",
      nome_comercial:"",
      numero_nif:"",
      rua_responsavel_tratamento:"",
      local_responsavel_tratamento:"",
      caixapostal_responsavel_tratamento:"",
      telefone_responsavel_tratamento:"",
      email_responsavel_tratamento:"",
      nome_representante_tratamento:"",
      rua_representante_tratamento:"",
      caixapostal_representante_tratamento:"",
      local_representante_tratamento:"",
      nome_pessoa_contato:"",
      email_representante_tratamento:"",
      telefone_representante_tratamento:"",
      entidade_processamento_informacao:"",
      rua_entidade_processamento:"",
      caixapostal_entidade_processamento:"",
      local_entidade_processamento:"",
      outraFormaDireitoAcesso:"",
      formaDireitoAcesso:"",
      paisResp:"",
      tipoPessoa:"",
      outros_dados_tratados_8_11:"",
      lista_dados_pessoais_tratados:"",
      url_recolha:"",
      descricao_outra_forma_recolhadireta:"",
      recolha_indireta:"",
      descricao_finalidade_interconexao:"",
      prazo_maximo_conservacao:"",
      rua_direito_acesso:"",
      caixapostal_direito_acesso:"",
      local_direito_acesso:"",
      email_direito_acesso:"",
      telefone_direito_acesso:"",
      outrasformas_direito_acesso:"",
      medidade_seguranca_fisica:"",
      medidas_seguranca_logica:"",
      parecer_representante_trabalhadores:"",
      outraFinalidadeTratamento:"",
      showModal: false,
      ErrorModal: false,
      

      

      /**************************TIPO NOTIFICACAO *********************************** */
      
    

      /**********************************ATIVIDADE DESENVOLVIDA*********************************************** */
      atividade: null,
      atividadeSR: null,
      
      atividadesDesenvolvidas: [
            { "value": "Actividade de Televisão", "label": "Actividade de Televisão" },
            {
              "value": "Emprego (Selecção, fornecimento de recursos humanos)",
              "label": "Emprego (Selecção, fornecimento de recursos humanos)"
            },
            { "value": "Segurança e Ordem pública", "label": "Segurança e Ordem pública" },
            { "value": "Produção da Água", "label": "Produção da Água" },
            { "value": "Telecomunicação", "label": "Telecomunicação" },
            { "value": "Segurança Privada", "label": "Segurança Privada" },
            {
              "value": "Ensino (Pré-escolar, Básico, Secundário, Superior)",
              "label": "Ensino (Pré-escolar, Básico, Secundário, Superior)"
            },
            {
              "value": "Estabelecimento comercial de venda a público",
              "label": "Estabelecimento comercial de venda a público"
            },
            {
              "value":
                "Serviço de Internet (processamento de dados, domiciliação de informação",
              "label":
                "Serviço de Internet (processamento de dados, domiciliação de informação"
            },
            {
              "value": "Administração Pública (Central, Local)",
              "label": "Administração Pública (Central, Local)"
            },
            { "value": "Saúde", "label": "Saúde" },
            { "value": "Centro Comercial", "label": "Centro Comercial" },
            {
              "value": "Publicidade, Estudos de Mercado, Sondagens de Opinião",
              "label": "Publicidade, Estudos de Mercado, Sondagens de Opinião"
            },
            { "value": "Negócios Estrangeiros", "label": "Negócios Estrangeiros" },
            { "value": "Previdência Social", "label": "Previdência Social" },
            {
              "value": "Alojamento (Hotel, Residencial, Pensão, etc.)",
              "label": "Alojamento (Hotel, Residencial, Pensão, etc.)"
            },
            { "value": "Defesa", "label": "Defesa" },
            { "value": "Actividade Financeira", "label": "Actividade Financeira" },
            { "value": "Comércio Electrónico", "label": "Comércio Electrónico" },
            { "value": "Informática", "label": "Informática" },
            { "value": "Justiça", "label": "Justiça" },
            { "value": "Seguros", "label": "Seguros" },
            {
              "value": "Transporte (Aéreo, Marítimo, Terrestre)",
              "label": "Transporte (Aéreo, Marítimo, Terrestre)"
            }
          ],
      /*******************************************RECOLHA DIRETA ******************************************/
      recolhaDireta: null,
      recolhaDiretas: [
        { value: "Presencial", label: "Presencial" },
        { value: "Telefone", label: "Telefone" },
        { value: "Internet", label: "Internet" },
        { value: "Por impresso", label: "Por impresso" },
      ],
      comunicacao: [
        {
          condicoesComunicacao: "",
          entidadesComunicadas: "",
          dadosTransferidos: "",
        },
      ],

      /*******************************************DADOS PESSOAIS CONTIDOS EM CADA REGISTRO DADOS TRATADOS ******************************************/

      dadosPessoaisTratado:null,
      dadospessoaisTratados: [
      
        {value: "Convicções ou filiação partidária ou sindical, fé religiosa", label: "Convicções ou filiação partidária ou sindical, fé religiosa"},
        {value: "Convicções filosóficas ou ideológicas", label: "Convicções filosóficas ou ideológicas"},
        { alue: "Origem racial ou étnica", label: "Origem racial ou étnica"},
        {value: "Vida Privada", label: "Vida Privada"  },
        {value: "Dados da saúde, vida sexual ou genéticos", label: "Dados da saúde, vida sexual ou genéticos"},
        {value: "Suspeitas de atividades ilícitas",label: "Suspeitas de atividades ilícitas"},
        {value: "Condenações penais",label: "Condenações penais" },
        {value: "Decisões que apliquem medidas de segurança",label: "Decisões que apliquem medidas de segurança" },
        {value: "Coímas, sansões acessórias",label: "Coímas, sansões acessórias"},
        {value: "Infrações penais e Contra-ordenações",label: "Infrações penais e Contra-ordenações"},
        {value: "Outros dados referentes ao art. 8º e 11º da lei nº.121/IX/2021 de 17 de março",label:"Outros dados referentes ao art. 8º e 11º da lei nº.121/IX/2021 de 17 de março"},
          
          
        
      ],

      /*******************************************TIPO DE NOTIFICAÇÃO ******************************************/
      tipoNot: null,
      error: "",
      tipoNotificacao: null,
      tipoNotificacoes: [
        { value: "1ª Notificação", label: "1ª Notificação" },
        { value: "Alteração", label: "Alteração" },
        {
          value: "Substituição da Notificação não autorizada",
          label: "Substituição da Notificação não autorizada",
        },
      ],
      /** *********************ILHAS E CONCELHOS ************************************** */
      ilhaResp: null,
      ilhaMorInst: null,
      ilhaServExt: null,
      ilhaDirAcess: null,
      ilha: null,
      
      concelho: null,
      concelhoMorInst: null,
      concelhoServExt: null,
      concelhoDirAcess: null,
      ilhaMorRep: null,
      concelhoMorRep: null,
      concelhoResp: null,

      ilhaRepre: null,
      concelhoRepre: null,

      concelhoServExtSR: null,
      ilhaServExtSR: null,
      ilhaRespSR: null,
      concelhoRespSR: null,
      ilhaMorRepSR: null,
      concelhoMorRepSR: null,
     
      ilhas: [
        { value: "Santo Antão", label: "Santo Antão" },
        { value: "São Vicente", label: "São Vicente" },
        { value: "São Nicolau", label: "São Nicolau" },
        { value: "Sal", label: "Sal" },
        { value: "Boa Vista", label: "Boa Vista" },
        { value: "Maio", label: "Maio" },
        { value: "Santiago", label: "Santiago" },
        { value: "Fogo", label: "Fogo" },
        { value: "Brava", label: "Brava" },
      ],

      concelhos: {
        "Santo Antão": [
          { value: "Ribeira Grande", label: "Ribeira Grande" },
          { value: "Paul", label: "Paul" },
          { value: "Porto novo", label: "Porto novo" },
        ],
        "São Vicente": [{ value: "São Vicente", label: "São Vicente" }],
        "São Nicolau": [
          { value: "Ribeira Brava", label: "Ribeira Brava" },
          {
            value: "Tarrafal de São Nicolau",
            label: "Tarrafal de São Nicolau",
          },
        ],
        Sal: [{ value: "Sal", label: "Sal" }],
        "Boa Vista": [{ value: "Boa Vista", label: "Boa Vista" }],
        Maio: [{ value: "Maio", label: "Maio" }],
        Santiago: [
          { value: "Praia", label: "Praia" },
          { value: "São Domingos", label: "São Domingos" },
          { value: "Santa Catarina", label: "Santa Catarina" },
          { value: "São Salvador do Mundo", label: "São Salvador do Mundo" },
          { value: "Santa Cruz", label: "Santa Cruz" },
          {
            value: "São Lourenço dos Órgãos",
            label: "São Lourenço dos Órgãos",
          },
          {
            value: "Ribeira Grande de Santiago",
            label: "Ribeira Grande de Santiago",
          },
          { value: "São Miguel", label: "São Miguel" },
          { value: "Tarrafal", label: "Tarrafal" },
        ],
        Fogo: [
          { value: "São Filipe", label: "São Filipe" },
          { value: "Santa Catarina do Fogo", label: "Santa Catarina do Fogo" },
          { value: "Mosteiros", label: "Mosteiros" },
        ],
        Brava: [{ value: "Brava", label: "Brava" }],
      },

      /*****************************CATEGORIA E FINALIDADES DE TRATAMENTO************************************** */
      selected: {},
      finalidd: null,
      categoria: null,
      categorias: [
            {
              "id": 1,
              "value": "Gestão contabilidade, fiscal e administrativa",
              "label": "Gestão contabilidade, fiscal e administrativa"
            },
            { "id":2, "value": "Gravação de Chamadas", "label": "Gravação de Chamadas" },
            { "id":3, "value": "Recursos Humanos", "label": "Recursos Humanos" },
            { "id":4, "value": "Telecomunicações", "label": "Telecomunicações" },
            { "id":5, "value": "Actividade Social", "label": "Actividade Social" },
            {
              "id":6,
              "value": "Actividade Financeira, Creditícia e Seguradora",
              "label": "Actividade Financeira, Creditícia e Seguradora"
            },
            { "id":7, "value": "Actividade Educativa", "label": "Actividade Educativa" },
            { "id":8, "value": "Saúde", "label": "Saúde" },
            {
              "id":9,
              "value": "Actividade Comercial e de Marketing",
              "label": "Actividade Comercial e de Marketing"
            }
          ],

      finalidadesCategorias: {
        "Gestão contabilidade, fiscal e administrativa": [
          {
            id: 1,
            value: "Gestão fiscal",
            label: "Gestão fiscal",
          },
          {
            id: 1,
            value: "Gestão administrativa",
            label: "Gestão administrativa",
          },
          {
            id: 1,
            value: "Gestão de faturação",
            label: "Gestão de faturação",
          },
          {
            id: 1,
            value: "Gestão de clientes",
            label: "Gestão de clientes",
          },
          {
            id: 1,
            value: "Gestão de cobranças e pagamentos",
            label: "Gestão de cobranças e pagamentos",
          },
          {
            id: 1,
            value: "Gestão de fornecedores",
            label: "Gestão de fornecedores",
          },
          {
            id: 1,
            value: "Gestão de condomínios",
            label: "Gestão de condomínios",
          },
          {
            id: 1,
            value: "Consultorias, auditorias e serviços relacionados",
            label: "Consultorias, auditorias e serviços relacionados",
          },
          {
            id: 1,
            value: "Histórico de relações comerciais",
            label: "Histórico de relações comerciais",
          },
        ],

        "Gravação de Chamadas": [
          {
            id: 1,
            value: "Gravação de chamadas na relação contratual",
            label: "Gravação de chamadas na relação contratual",
          },
          {
            id: 1,
            value: "Gravação de chamadas de emergência",
            label: "Gravação de chamadas de emergência",
          },
          {
            id: 1,
            value: "Gravação para monitorização da qualidade serviço",
            label: "Gravação para monitorização da qualidade serviço",
          },
        ],
        "Recursos Humanos": [
          {
            id: 1,
            value: "Gestão de recursos humanos",
            label: "Gestão de recursos humanos",
          },
          {
            id: 2,
            value: "Processamento de remuneração",
            label: "Processamento de remuneração",
          },
          {
            id: 3,
            value: "Formação profissional",
            label: "Formação profissional",
          },
          {
            id: 4,
            value: "Gestão de sanções disciplinar",
            label: "Gestão de sanções disciplinar",
          },
          {
            id: 5,
            value: "Seleção de pessoal e recrutamento",
            label: "Seleção de pessoal e recrutamento",
          },
          {
            id: 6,
            value: "Gestão de trabalho temporário",
            label: "Gestão de trabalho temporário",
          },
          {
            id: 7,
            value: "Gestão de teletrabalho",
            label: "Gestão de teletrabalho",
          },
          {
            id: 8,
            value: "Medicina no trabalho",
            label: "Medicina no trabalho",
          },
          {
            id: 9,
            value: "Controlo de horário / assiduidade",
            label: "Controlo de horário / assiduidade",
          },
          {
            id: 10,
            value: "Controlo de emails, acessos à internet e chamadas",
            label: "Controlo de emails, acessos à internet e chamadas",
          },
          {
            id: 11,
            value: "Controlo de alcoolemia e produtos psicotrópicos",
            label: "Controlo de alcoolemia e produtos psicotrópicos",
          },
          {
            id: 12,
            value: "Linhas de ática (Whistle blowing)",
            label: "Linhas de ática (Whistle blowing)",
          },
          {
            id: 13,
            value: "Controlo por GPS/GSM/RFID",
            label: "Controlo por GPS/GSM/RFID",
          },
        ],
        Telecomunicações: [
          {
            id: 14,
            value: "Gestão da faturação",
            label: "Gestão da faturação",
          },
          {
            id: 15,
            value: "Retenção de dados de trafego/localização",
            label: "Retenção de dados de trafego/localização",
          },
          {
            id: 16,
            value: "Gestão de contencioso",
            label: "Gestão de contencioso",
          },
          {
            id: 17,
            value: "Gestão de pedidos interceção judiciais das comunicações",
            label: "Gestão de pedidos interceção judiciais das comunicações",
          },
          {
            id: 18,
            value: "Gestão de pedidos da lei",
            label: "Gestão de pedidos da lei",
          },
          {
            id: 19,
            value: "Gestão de pedidos de GPS",
            label: "Gestão de pedidos da GPS",
          },
        ],
        "Actividade Social": [
          {
            id: 20,
            value: "Gestão de utentes",
            label: "Gestão de utentes",
          },
          {
            id: 21,
            value: "Gestão de apoio domiciliário",
            label: "Gestão de apoio domiciliário",
          },
          {
            id: 22,
            value: "Atribuição ou prestação de sociais",
            label: "Atribuição ou prestação de sociais",
          },
          {
            id: 23,
            value: "Gestão de linhas telefónicas de apoio ",
            label: "Gestão de linhas telefónicas de apoio ",
          },
        ],
        "Actividade Financeira, Creditícia e Seguradora": [
          {
            id: 24,
            value: "Gestão de clientes",
            label: "Gestão de clientes",
          },
          {
            id: 25,
            value: "Avaliação de risco de crédito",
            label: "Avaliação de risco de crédito",
          },
          {
            id: 26,
            value: "Titularização de créditos",
            label: "Titularização de créditos",
          },
          {
            id: 27,
            value: "Cessão de créditos ",
            label: "Cessão de créditos ",
          },
          {
            id: 28,
            value: "Prospecção das opções de crédito ",
            label: "Prospecção das opções de crédito ",
          },
          {
            id: 29,
            value: "Gestão de créditos extrajudiciais ",
            label: "Gestão de créditos extrajudiciais ",
          },
          {
            id: 30,
            value: "Informação e negócios",
            label: "Informação e negócios",
          },
          {
            id: 31,
            value: "Gestão de seguros de vida",
            label: "Gestão de seguros de vida",
          },
          {
            id: 32,
            value: "Gestão de seguros de não vida",
            label: "Gestão de seguros de  não vida",
          },
          {
            id: 33,
            value: "Gestão de seguros automóveis",
            label: "Gestão de seguros automóveis",
          },
          {
            id: 34,
            value: "Gestão de seguros de acidentes pessoais",
            label: "Gestão de seguros de acidentes pessoais",
          },
          {
            id: 35,
            value: "Gestão de seguros de acidentes de trabalho",
            label: "Gestão de seguros de acidentes de trabalho",
          },
          {
            id: 36,
            value: "Gestão de seguros de acidentes de outra natureza",
            label: "Gestão de seguros de acidentes de outra natureza",
          },
          {
            id: 37,
            value: "Mediação de seguros",
            label: "Mediação de seguros",
          },
          {
            id: 38,
            value: "Resseguros",
            label: "Resseguros",
          },
        ],
        "Actividade Educativa": [
          {
            id: 39,
            value: "Gestão de alunos",
            label: "Gestão de alunos",
          },
          {
            id: 40,
            value: "Gestão de docentes",
            label: "Gestão de docentes",
          },
          {
            id: 41,
            value: "Promoção e inserção na vida profissional",
            label: "Promoção e inserção na vida profissional",
          },
          {
            id: 42,
            value: "Gestão de apoios sociais ",
            label: "Gestão de apoios sociais ",
          },
          {
            id: 43,
            value: "Gestão de sites escolares ",
            label: "Gestão de sites escolares",
          },
        ],
        Saúde: [
          {
            id: 44,
            value: "Gestão de processos clínicos",
            label: "Gestão de processos clínicos",
          },
          {
            id: 45,
            value: "Prescrição medicamentos electrónica",
            label: "Prescrição medicamentos electrónica",
          },
          {
            id: 46,
            value: "Gestão administrativa de utentes",
            label: "Gestão administrativa de utentes",
          },
          {
            id: 47,
            value: "Etudos clínicos observacionais(não intervencionais) ",
            label: "Etudos clínicos observacionais(não intervencionais)",
          },
          {
            id: 48,
            value: "Ensaios clínicos (intervencionais)",
            label: "Ensaios clínicos (intervencionais)",
          },
          {
            id: 49,
            value: "Farmacovigilância",
            label: "Farmacovigilância",
          },
          {
            id: 50,
            value: "Gestão de utentes de farmácia",
            label: "Gestão de utentes de farmácia",
          },
          {
            id: 51,
            value: "Sistema de apoio à prática de enfermagem",
            label: "Sistema de apoio à prática de enfermagem",
          },
        ],
        "Actividade Comercial e de Marketing": [
          {
            id: 52,
            value: "Marketing",
            label: "Marketing",
          },
          {
            id: 53,
            value: "Sondagem e inquéiritos de opinião",
            label: "Sondagem e inquéiritos de opinião",
          },
          {
            id: 54,
            value: "Analise e perfis de consumo",
            label: "Analise e perfis de consumo",
          },
          {
            id: 55,
            value: "Gestão de clientes ",
            label: "Gestão de clientes ",
          },
          {
            id: 56,
            value: "Fidelização de clientes ",
            label: "Fidelização de clientes",
          },
          {
            id: 57,
            value: "Registro de utilizadores em site da internet ",
            label: "Registro de utilizadores em site da internet",
          },
        ],
      },
      /************************************CATEGORIA DE FINALIDADE*********************************** */
      finalidadiCategory: [
        {
          categoria: "",
          finalidadesCategorias: "",
        },
      ],

      outrosDados: [
        { value: "No do empregado", label: "No do empregado" },
        { value: "Nome", label: "Nome" },
        { value: "Telefone", label: "Telefone" },
        { value: "Horário", label: "Horário" },
        {
          value: "Escalas de serviço",
          label: "Cargo/categoria/função desempenhada",
        },
        { value: "Departamento/secção", label: "Departamento/secção" },
        {
          value: "Data e hora de entrada e saida",
          label: "Data e hora de entrada e saida",
        },
      ],
      formasRegistro: [
        { value: "Templete", label: "Templete" },
        { value: "Imagem", label: "Imagem" },
        { value: "Base de dados central", label: "Base de dados central" },
        { value: "Terminal local", label: "Terminal local" },
        { value: "Cartão", label: "Cartão" },
      ],
      tratamentoInfo: [
        {
          value: "Central num estabelecimento único",
          label: "Central num estabelecimento único",
        },
        {
          value: "Central com vários estabelecimentos",
          label: "Central com vários estabelecimentos",
        },
        { value: "Em cada estabelecimento", label: "Em cada estabelecimento" },
      ],
      /** *************************TRANSFERENCIA INTERNACIONAL********************************* */

      internacional: [
        {
            dadosTransferidosInt: "",
            entidadesInternacional: "",
            paisTransferido: "",
            fundamento: "",
        },
      ],
    };
  },
  methods: {
    
     onInput(event) {
      const value = event.target.value;

      if (!value) {
        this.error = 'Value should not be empty';
      }
     },
  
    validateText(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      return true;
    },

    validateRadio(value) {
      // if the field is empty
      if (!value) {
        return "Precisa selecionar uma opção!";
      }
      return true;
    },
    
   async  submitForm() {
     const data = {

        tipo_notificacao: this.tipoNotificacao,
        tipo_pessoa:  this.tipoPessoa,
        nome_denominacao:   this.nome_denominacao,
        atividade_desenvolvida: this.atividadeDesenvolvida,
        nome_comercial:   this.nome_comercial,
        numero_nif:   this.numero_nif,
        rua_responsavel_tratamento:   this.rua_responsavel_tratamento,
        local_responsavel_tratamento:   this.local_responsavel_tratamento,
        ilha_responsavel_tratamento:    this.ilhaResp,
        concelho_responsavel_tratamento:  this.concelhoResp,
        caixapostal_responsavel_tratamento:this.caixapostal_responsavel_tratamento,
        telefone_responsavel_tratamento:this.telefone_responsavel_tratamento,
        email_responsavel_tratamento:this.email_responsavel_tratamento,
        pais_responsavel_tratamento:this.paisResp,
        nome_representante_tratamento:this.nome_representante_tratamento,
        rua_representante_tratamento:this.rua_representante_tratamento,
        caixapostal_representante_tratamento:this.caixapostal_representante_tratamento,
        local_representante_tratamento:this.local_representante_tratamento,
        ilha_representante_tratamento:this.ilhaRepre,
        concelho_representante_tratamento:this.concelhoRepre,
        nome_pessoa_contato:this.nome_pessoa_contato,
        email_representante_tratamento:this.email_representante_tratamento,
        telefone_representante_tratamento:this.telefone_representante_tratamento,
        entidade_processamento_informacao:this.entidade_processamento_informacao,
        rua_entidade_processamento:this.rua_entidade_processamento,
        caixapostal_entidade_processamento:this.caixapostal_entidade_processamento,
        local_entidade_processamento:this.local_entidade_processamento,
        ilha_entidade_processamento:this.ilhaServExt,
        concelho_entidade_processamento:this.concelhoServExt,
        outraFinalidadeTratamento:this.outraFinalidadeTratamento,
        array_finalidades:this.finalidadiCategory,
        array_comunicacao_terceiros: this.comunicacao, 
        dados_pessoais_contidos:this.dadosPessoaisTratado,
        outros_dados_tratados_8_11:this.outros_dados_tratados_8_11,  
        lista_dados_pessoais_tratados:this.lista_dados_pessoais_tratados,
        recolha_direta:this.recolhaDireta,
        url_recolha:this.url_recolha,
        descricao_outra_forma_recolhadireta:this.descricao_outra_forma_recolhadireta,
        recolha_indireta:this.recolha_indireta,
        descricao_finalidade_interconexao:this.descricao_finalidade_interconexao,
        prazo_maximo_conservacao:this.prazo_maximo_conservacao,
        array_transferencia_internacional:this.internacional,
        rua_direito_acesso:this.rua_direito_acesso,
        caixapostal_direito_acesso:this.caixapostal_direito_acesso,
        local_direito_acesso:this.local_direito_acesso,
        ilha_direito_acesso:this.ilhaDirAcess,
        concelho_direito_acesso:this.concelhoDirAcess,
        email_direito_acesso:this.email_direito_acesso,
        telefone_direito_acesso:this.telefone_direito_acesso,
        forma_direito_acesso:this.formaDireitoAcesso,
        outrasformas_direito_acesso:this.outrasformas_direito_acesso,
        medidade_seguranca_fisica:this.medidade_seguranca_fisica,
        medidas_seguranca_logica:this.medidas_seguranca_logica,
        parecer_representante_trabalhadores:this.parecer_representante_trabalhadores,


        

       

     };
     try {  
      await axios.post(`${API_ENDPOINT}/api/queixa/create`, data, { 
        headers: { "Content-Type": "multipart/form-data; charset=utf-8" },
      }); 
      this.showModal = !this.showModal; 
     setTimeout(function(){
        window.location.reload();
      }, 5000)

    }catch(error){
          this.ErrorModal = !this.ErrorModal; 
         setTimeout(function(){
          window.location.reload();
        }, 5000)
    
       
       
      }
     
     

    },

    closeError(event) {
      this.ErrorModal = !this.ErrorModal; 
     event.preventDefault();
      window.location.reload();
    },
    closeSuccess(event) {
      this.showModal = !this.showModal;  
    event.preventDefault();
    window.location.reload();
    },
    
   
   
    
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "Email inválido, precisa ser nesse formato: cnpd@example.cv";
      }
      // All is good
      return true;
    },
    validateMulti(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
    },
    validateNumber(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid number
      const regex = /[0-9]/;
      if (!regex.test(value)) {
        return "Carater inválido, Precisa ser um número!";
      }

      return true;
    },


    changeMorada() {
      this.checkMorada = !this.checkMorada;
    },
    changeServico() {
      this.checkServico = !this.checkServico;
    },
    changeDireitoAcesso() {
      this.checkDireitoAcesso = !this.checkDireitoAcesso;
    },
    changeRepTrab() {
      this.checkRepTrab = !this.checkRepTrab;
    },
    changeInterconexoes(){
      this.checkInterconexoes = !this.checkInterconexoes;
    },
    /*FINALIDADES MULTIPLAS*/

    addFinalidd() {
      this.finalidadiCategory.push({
       // categoria: "",
        //finalidadesCategorias: "",
      });

      
    },
    
    addComunicTerce() {
      this.comunicacao.push({
        //condicoesComunicacao: "",
        //entidadesComunicadas: "",
      });
    },
    /*TRANSFER INTERNACIONAL*/
    addTransfInter() {
      this.internacional.push({
        //dadosTransferidosInt: "",
        //entidadesInternacional: "",
        //paisTransferido: "",
        //fundamento: "",
      });
    },
    removeInter(index) {
      this.internacional.splice(index, 1);
    },
    removeComunic(index) {
      this.comunicacao.splice(index, 1);
    },
    changeComunicTerce() {
      this.checkComunicTerce = !this.checkComunicTerce;
    },
    removeFinalidd(index) {
      this.finalidadiCategory.splice(index, 1);
    },
    changeTransfInter() {
      this.checkTransfInter = !this.checkTransfInter;
    },
  },
  


  watch: {
    categoria() {
      this.finalidd = null;
    },
    tipoVideo() {
      this.zona = null;
    },
  },
};
</script>

<style>
 .decisoes{
  font-family: "Times New Roman", Times, serif;  
 }
#buttonsave {
  background-color: #061536;
}
#divsave {
  text-align: center;
}
button#buttonsave:hover,
button#buttonsave:focus {
  background-color: #061536;
  outline: none !important;
  border-color: #061536;
  color: #bd9a13;
  box-shadow: 0 0 10px #061536;
}
input,
label,
textarea {
  font-family: "Times New Roman", Times, serif;
}
input {
  margin-bottom: 10px;
}
 
#removeItem {
  background-color: #bd9a13;
  outline: none !important;
  border-color: #061536;
  color: #061536;
  box-shadow: 0 0 10px #061536;
}
#addmore {
  background-color: #bd9a13;
  outline: none !important;
  border-color: #061536;
  color: #061536;
  box-shadow: 0 0 10px #061536;
}
#numfunc {
  width: 300px;
  margin-left: 30px;
}
#fin {
  display: flex;
  justify-content: space-around;
}

#divg {
  font-family: "Times New Roman", Times, serif;
  border: 1px solid #061536;
  padding: 10px;
  border-radius: 10px;
}
.col {
  font-family: "Times New Roman", Times, serif;
}
#divg2 {
  font-family: "Times New Roman", Times, serif;
  padding-top: 20px;
}
.col {
  font-family: "Times New Roman", Times, serif;
}
select {
  font-family: "Times New Roman", Times, serif;
}

input,
label {
  font-family: "Times New Roman", Times, serif;
}
input {
  margin-bottom: 10px;
}
input.form-control:focus,
select.form-select:focus {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
  font-family: "Times New Roman", Times, serif;
}
select {
  font-family: "Times New Roman", Times, serif;
}
option:hover {
  background-color: yellow;
}

#separacao {
  font-family: "Times New Roman", Times, serif;
  padding-left: 10px;
  text-align: center;
  color: #ffffff;
  border-style: ridge;
  border-radius: 10px;
  background: #061536;
}
#labelleft {
  text-align: center;
}
#divloco {
  margin-top: 10px;
}
#moradasimbotton {
  margin-left: 10px;
  color: #061536;
  border-color: #061536;
}
#moradasimbotton:hover {
  background-color: #061536;
  color: #fff;
  border: 2px solid #bd9a13;
}

.icon-box {
  background-color: white;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  background: #bd9a13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
</style>
