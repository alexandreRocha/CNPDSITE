<template>
  <section id="Interconexao" class="Interconexao">
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
          <router-link style="text-decoration: none" to="/formsinter">
            <b>Formulário de Interconexão de Dados</b>
          </router-link>
        </h5>
      </div>
      <Form @submit="onSubmit">
        <!-- FORMS Interconexao-->
        <div class="section-title">
          <h2>NOTIFICAÇÃO DE INTERCONEXÃO UNILATERAL DOS DADOS</h2>
        </div>
        <div class="col-md-12"></div>
       
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
              
              <div class="row">
                <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  1. Responsável pelo Tratamento e seu representante
                  <br />
                </div>

                <div class="col-md-12" id="separacao1">
                  1.1. Primeira entidade de interconexão (destinatário de dados
                  na interconexão)
                  <br />
                  1.1.1. Responsável pelo Tratamento
                </div>
              </div> 
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
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="nome_denominacao"
                  id="nome_denominacao"
                  v-model="nome_denominacao"
                  placeholder=" Nome/Denominação"
                />
                <ErrorMessage class="errorMessage" name="nome_denominacao" />
              </div>

              <div class="col-md-12">
                <Field 
                  type="text"
                  class="form-control"
                  name="nome_comercial"
                  id="nome_comercial"
                  v-model="nome_comercial"
                  placeholder=" Nome/Comercial"
                /> 
              </div>
              <div class="col">
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
                  :rules="validateNumber"
                  type="number"
                  class="form-control"
                  name="numero_nif"
                  id="numero_nif"
                  v-model="numero_nif"
                  placeholder="Número de NIF"
                />
                <ErrorMessage class="errorMessage" name="numero_nif" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field 
                      type="text"
                      class="form-control"
                      name="rua_responsavel_tratamento"
                      id="rua_responsavel_tratamento"
                      v-model="rua_responsavel_tratamento"
                      placeholder="Entre o nome da Rua"
                    /> 
                  </div>
                  <div class="col">
                    <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="local_responsavel_tratamento"
                      id="local_responsavel_tratamento"
                      v-model="local_responsavel_tratamento"
                      placeholder="Cidade/Vila/Lugar/Zona"
                    />
                    <ErrorMessage class="errorMessage" name="local_responsavel_tratamento" />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="ilhaResp"
                      name="ilhaResp"
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
                        {{ ilha.value }}
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
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="concelho in concelhos[ilhaResp]"
                        :key="concelho.value"
                        :value="concelho.value"
                      >
                        {{ concelho.value }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoResp" />
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <div class="row">
                  <div class="col">
                    <Field 
                      type="text"
                      class="form-control"
                      name="caixapostal_responsavel_tratamento"
                      id="caixapostal_responsavel_tratamento"
                      v-model="caixapostal_responsavel_tratamento"
                      placeholder="Entre o número da Caixa Postal"
                    /> 
                  </div>
                  <div class="col">
                    <Field
                      :rules="validateNumber"
                      v-model="contato_responsavel_tratamento"
                      type="number"
                      class="form-control"
                      name="contato_responsavel_tratamento"
                      id="contato_responsavel_tratamento"
                      alt="Telefone/Telemovel"
                      placeholder="Contato: Telefone/Telemovel"
                    />
                    <ErrorMessage class="errorMessage" name="contato_responsavel_tratamento" />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      :rules="validateEmail"
                      type="email"
                      class="form-control"
                      name="email_responsavel_tratamento"
                      id="email_responsavel_tratamento"
                      v-model="email_responsavel_tratamento"
                      placeholder="Entre o seu email: example@cnpd.cv"
                    />
                    <ErrorMessage class="errorMessage" name="email_responsavel_tratamento" />
                  </div>
                  <div class="col">
                      <div class="col">
                        <Field
                          :rules="validateRadio"
                          type="radio"
                          id="pais_responsavel_tratamento"
                          name="pais_responsavel_tratamento"
                          value="Cabo Verde"
                          v-model="pais_responsavel_tratamento"
                        />
                        <label for="Pessoa Singular"> Cabo Verde</label>
                      </div>
                      <div class="col">
                        <Field
                          :rules="validateRadio"
                          type="radio"
                          id="pais_responsavel_tratamento"
                          name="pais_responsavel_tratamento"
                          value=" Fora do Território Nacional"
                          v-model="pais_responsavel_tratamento"
                        />
                        <label for=" Fora do Território Nacional">
                          Fora do Território Nacional</label
                        >
                      </div>
                      <ErrorMessage
                        class="errorMessage"
                        name="pais_responsavel_tratamento"
                      />
                    </div>
                </div>
              </div>
            </div>
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  1.1.2. Representante do Primeiro Responsável pelo Tratamento
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="nome_representante_instalacao"
                      id="nome_representante_instalacao"
                      v-model="nome_representante_instalacao"
                  placeholder="Representante"
                    />
                    <ErrorMessage class="errorMessage" name="nome_representante_instalacao" /> 
              </div>
              <div class="col">
                <Field 
                      type="text"
                      class="form-control"
                      name="rua_representante_instalacao"
                      id="rua_representante_instalacao"
                      v-model="rua_representante_instalacao"
                  placeholder=" Rua "
                    />  
              </div>
              <div class="col">
              
                <Field 
                      type="text"
                      class="form-control"
                      name="caixapostal_representante_instalacao"
                      id="caixapostal_representante_instalacao"
                      v-model="caixapostal_representante_instalacao"
                  placeholder=" Caixa Postal "
                    />  
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="ilhaMorRep"
                      name="ilhaMorRep"
                      id="ilhaMorRep"
                      for="ilhaMorRep"
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
                    <ErrorMessage class="errorMessage" name="ilhaMorRep" /> 
                  </div>
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="concelhoMorRep"
                      name="concelhoMorRep"
                      id="concelhoMorRep"
                      for="concelhoMorRep"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="concelho in concelhos[ilhaMorRep]"
                        :key="concelho.value"
                        :value="concelho.value"
                      >
                        {{ concelho.value }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoMorRep" /> 
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="local_representante_instalacao"
                      id="local_representante_instalacao"
                      v-model="local_representante_instalacao"
                      placeholder="Cidade/Vila/Lugar/Zona"
                    />
                    <ErrorMessage class="errorMessage" name="local_representante_instalacao" />  
                    </div>
                    <div class="col">
                      <input
                        disabled
                        type="text"
                        class="form-control"
                        name="pais_representante_instalacao" 
                        id="pais_representante_instalacao"
                        placeholder="Cabo Verde"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12" id="separacao">
                  1.1.3. Pessoa de Contato do Primeiro Responsável pelo
                  Tratamento
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12">
                  <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="nome_pessoa_contato_representante_instalacao"
                      id="nome_pessoa_contato_representante_instalacao"
                      v-model="nome_pessoa_contato_representante_instalacao"
                    placeholder="Nome da pessoa de contato"
                    />
                    <ErrorMessage class="errorMessage" name="nome_pessoa_contato_representante_instalacao" />   
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                      :rules="validateEmail"
                      type="text"
                      class="form-control"
                      name="email_pessoa_representante_instalacao"
                      id="email_pessoa_representante_instalacao"
                      v-model="email_pessoa_representante_instalacao"
                        placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                    />
                    <ErrorMessage class="errorMessage" name="email_pessoa_representante_instalacao" />  
                    </div>
                    <div class="col">
                      <Field
                      :rules="validateNumber"
                      type="number"
                      class="form-control"
                      name="contato_representante_instalacao"
                      id="contato_representante_instalacao"
                      v-model="contato_representante_instalacao"
                      placeholder="Contato: Telefone/Telemovel"
                    />
                    <ErrorMessage class="errorMessage" name="contato_representante_instalacao" />   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       

        <!---- ----------------- Processamento da informação primeiro responsavel--------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  1.1.4. Processamento da informação do Primeiro Responsável
                </div>
              </div>
              <div class="col-md-12">
                <label class="form-check-label">
                  Existe um Serviço Externo encarregado do processamento do
                  primeiro Responsável?
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
              <div class="col-md-12"><br /></div>
              <div class="col-md-12" v-if="checkServico">
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="entidade_processamento_informacao"
                    id="entidade_processamento_informacao"
                    v-model="entidade_processamento_informacao"
                    placeholder=" Qual a Entidade Encarregue pelo proccessamento dos dados"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="entidade_processamento_informacao"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="rua_processamento_informacao"
                    id="rua_processamento_informacao"
                    v-model="rua_processamento_informacao"
                    placeholder=" Rua"
                  /> 
                </div>
                <div class="col-md-12">
                  <Field 
                    type="text"
                    class="form-control"
                    name="caixapostal_processamento_informacao"
                    id="caixapostal_processamento_informacao"
                    v-model="caixapostal_processamento_informacao"
                    placeholder=" Caixa Postal"
                  /> 
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="local_processamento_informacao"
                    id="local_processamento_informacao"
                    placeholder="Cidade/Vila/Lugar/Zona da Entidade"
                    v-model="local_processamento_informacao"
                  />
                  <ErrorMessage class="errorMessage" name="local_processamento_informacao" />
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="ilhaServExt"
                        name="ilhaServExt"
                        id="ilhaServExt"
                        for="ilhaServExt"
                        :rules="validateRadio"
                        placeholder="- Seleciona uma ilha-"
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
                      <ErrorMessage class="errorMessage" name="ilhaServExt" />
                    </div>
                    <div class="col">
                      <Field
                        as="select"
                        class="form-select"
                        v-model="concelhoServExt"
                        name="concelhoServExt"
                        id="concelhoServExt"
                        for="concelhoServExt"
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
                      <ErrorMessage
                        class="errorMessage"
                        name="concelhoServExt"
                      />
                    </div>
                    
                    <p id="p">
                      * Caso exista mais que uma entidade, deverá anexar uma
                      lista de todas as entidades que processam os dados, com
                      que fim e quais os dados tratados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--------------------------------------SEGUNDA ENTIDADE DE INTERCONEXAO----------------------------------------------------->
          <div class="col-md-12" >
            <div class="container">
              <div class="row">
                <div class="col-md-12" id="divloco">
                  <div class="col-md-12" id="separacao">
                    1.2. Segunda entidade de interconexão (fornecedor de dados
                    na interconexão)
                  </div>
                  <div class="col-md-12" id="separacao1">
                    1.2.1. Responsável pelo Tratamento
                  </div>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-2">
                  <Field
                    :rules="validateRadio"
                    type="radio"
                    id="tipoPessoaSR"
                    name="tipoPessoaSR"
                    value="Pessoa Singular"
                    v-model="tipoPessoaSR"
                  />
                  <label for="Pessoa Singular"> Pessoa Singular</label>
                </div>
                <div class="col-md-2">
                  <Field
                    :rules="validateRadio"
                    type="radio"
                    id="tipoPessoaSR"
                    name="tipoPessoaSR"
                    value="Pessoa Coletiva"
                    v-model="tipoPessoaSR"
                  />
                  <label for="Pessoa Coletiva"> Pessoa Coletiva</label>
                </div>
              <div class="col-md-4"></div>
              <div class="col-md-12" id="alignCenter">
                <ErrorMessage class="errorMessage" name="tipoPessoaSR" />
              </div>
              <div class="col-md-12">
                <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="nome_denominacaoSR"
                  id="nome_denominacaoSR"
                  v-model="nome_denominacaoSR"
                   placeholder=" Nome/Denominação"
                />
                <ErrorMessage class="errorMessage" name="nome_denominacaoSR" />
              </div>

              <div class="col-md-12">
                <Field 
                  type="text"
                  class="form-control"
                  name="nome_comercialSR"
                  id="nome_comercialSR"
                    placeholder=" Nome/Comercial"
                /> 
              </div>
              <div class="col">
                <Field
                  name="atividadeDesenvolvidaSR"
                  as="select"
                  class="form-select"
                  v-model="atividadeDesenvolvidaSR"
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
                  name="atividadeDesenvolvidaSR"
                />
              </div>
              <div class="col">
                <Field
                  :rules="validateNumber"
                  type="number"
                  class="form-control"
                  name="numero_nifSR"
                  id="numero_nifSR" 
                  v-model="numero_nifSR"
                  placeholder="Número de NIF"
                />
                <ErrorMessage class="errorMessage" name="numero_nifSR" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field 
                      type="text"
                      class="form-control"
                      name="rua_responsavel_tratamentoSR"
                      id="rua_responsavel_tratamentoSR"
                      v-model="rua_responsavel_tratamentoSR"
                      placeholder="Entre o nome da Rua"
                    /> 
                  </div>
                  <div class="col">
                    <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="local_responsavel_tratamentoSR"
                      id="local_responsavel_tratamentoSR" 
                      v-model="local_responsavel_tratamentoSR"
                      placeholder="Cidade/Vila/Lugar/Zona"
                    />
                    <ErrorMessage class="errorMessage" name="local_responsavel_tratamentoSR" />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="ilhaRespSR"
                      name="ilhaRespSR"
                      id="ilhaRespSR"
                      for="ilhaRespSR"
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
                    <ErrorMessage class="errorMessage" name="ilhaRespSR" />
                  </div>
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="concelhoRespSR"
                      name="concelhoRespSR"
                      id="concelhoRespSR"
                      for="concelhoRespSR"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="concelho in concelhos[ilhaRespSR]"
                        :key="concelho.value"
                        :value="concelho.value"
                      >
                        {{ concelho.value }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoRespSR" />
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <div class="row">
                  <div class="col">
                    <Field 
                      type="text"
                      class="form-control"
                      name="caixapostal_responsavel_tratamentoSR"
                      id="caixapostal_responsavel_tratamentoSR"
                      v-model="caixapostal_responsavel_tratamentoSR"
                      placeholder="Entre o número da Caixa Postal"
                    /> 
                  </div>
                  <div class="col">
                    <Field
                      :rules="validateNumber"
                      v-model="contato_responsavel_tratamentoSR"
                      type="number"
                      class="form-control"
                      name="contato_responsavel_tratamentoSR"
                      id="contato_responsavel_tratamentoSR"
                      alt="Telefone/Telemovel"
                      placeholder="Contato: Telefone/Telemovel"
                    />
                    <ErrorMessage class="errorMessage" name="contato_responsavel_tratamentoSR" />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      :rules="validateEmail"
                      type="email"
                      class="form-control"
                      name="email_responsavel_tratamentoSR"
                      id="email_responsavel_tratamentoSR"
                      v-model="email_responsavel_tratamentoSR"
                      placeholder="Entre o seu email: example@cnpd.cv"
                    />
                    <ErrorMessage class="errorMessage" name="email_responsavel_tratamentoSR" />
                  </div>
                  <div class="col">
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="pais_responsavel_tratamentoSR"
                        name="pais_responsavel_tratamentoSR"
                        value="Cabo Verde"
                        v-model="pais_responsavel_tratamentoSR"
                      />
                      <label for="Pessoa Singular"> Cabo Verde</label>
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="pais_responsavel_tratamento"
                        name="pais_responsavel_tratamentoSR"
                        value=" Fora do Território Nacional"
                        v-model="pais_responsavel_tratamentoSR"
                      />
                      <label for=" Fora do Território Nacional">
                        Fora do Território Nacional</label
                      >
                    </div>
                    <ErrorMessage class="errorMessage" name="pais_responsavel_tratamentoSR" />
                  </div>
                </div>
              </div>
                <div class="col-md-12" id="divloco">
                  <div class="col-md-12" id="separacao">
                    1.2.2. Representante do Segundo Responsável pelo Tratamento
                  </div>
                </div>
                <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="nome_representante_instalacaoSR"
                      id="nome_representante_instalacaoSR"
                      v-model="nome_representante_instalacaoSR"
                  placeholder=" Representante"
                    />
                    <ErrorMessage class="errorMessage" name="nome_representante_instalacaoSR" /> 
              </div>
              <div class="col">
                <Field 
                      type="text"
                      class="form-control"
                      name="rua_representante_instalacaoSR"
                      id="rua_representante_instalacaoSR"
                      v-model="rua_representante_instalacaoSR"
                  placeholder=" Rua "
                    />  
              </div>
              <div class="col">
              
                <Field 
                      type="text"
                      class="form-control"
                      name="caixapostal_representante_instalacaoSR"
                      id="caixapostal_representante_instalacaoSR"
                      v-model="caixapostal_representante_instalacaoSR"
                  placeholder=" Caixa Postal "
                    />  
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="ilhaMorRepSR"
                      name="ilhaMorRepSR"
                      id="ilhaMorRepSR"
                      for="ilhaMorRepSR"
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
                    <ErrorMessage class="errorMessage" name="ilhaMorRepSR" /> 
                  </div>
                  <div class="col">
                    <Field
                      as="select"
                      class="form-select"
                      v-model="concelhoMorRepSR"
                      name="concelhoMorRepSR"
                      id="concelhoMorRepSR"
                      for="concelhoMorRepSR"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="concelho in concelhos[ilhaMorRepSR]"
                        :key="concelho.value"
                        :value="concelho.value"
                      >
                        {{ concelho.value }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoMorRepSR" /> 
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="local_representante_instalacaoSR"
                      id="local_representante_instalacaoSR"
                      v-model="local_representante_instalacaoSR"
                        placeholder="Cidade/Vila/Lugar/Zona"
                    />
                    <ErrorMessage class="errorMessage" name="local_representante_instalacaoSR" />  
                    </div>
                    <div class="col">
                      <input
                        disabled
                        type="text"
                        class="form-control"
                        name="pais_representante_instalacaoSR"
                        value="Cabo Verde"
                        id="pais_representante_instalacaoSR"
                        placeholder="Cabo Verde"
                      />
                    </div>
                  </div>
                </div>
                  <div class="col-md-12" id="separacao">
                    1.2.3. Pessoa de Contato do Segundo Responsável pelo
                    Tratamento
                  </div>
                  <div class="col-md-12"><br /></div>
                  <div class="col-md-12">
                  <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="nome_pessoa_contato_representante_instalacaoSR"
                      id="nome_pessoa_contato_representante_instalacaoSR"
                      v-model="nome_pessoa_contato_representante_instalacaoSR"
                    placeholder="Nome da pessoa de contato"
                    />
                    <ErrorMessage class="errorMessage" name="nome_pessoa_contato_representante_instalacaoSR" />   
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="col">
                      <Field
                      :rules="validateEmail"
                      type="text"
                      class="form-control"
                      name="email_pessoa_representante_instalacaoSR"
                      id="email_pessoa_representante_instalacaoSR"
                      v-model="email_pessoa_representante_instalacaoSR"
                        placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                    />
                    <ErrorMessage class="errorMessage" name="email_pessoa_representante_instalacaoSR" />  
                    </div>
                    <div class="col">
                      <Field
                      :rules="validateNumber"
                      type="number"
                      class="form-control"
                      name="contato_representante_instalacaoSR"
                      id="contato_representante_instalacaoSR"
                      v-model="contato_representante_instalacaoSR"
                        placeholder="Contato: Telefone/Telemovel"
                    />
                    <ErrorMessage class="errorMessage" name="contato_representante_instalacaoSR" />   
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <!---- ----------------- Processamento da informação segundo responsavel--------------------------------------------------------------------->
          <div class="col">
            <div class="container">
              <div class="row">
                <div class="col-md-12" id="divloco">
                  <div class="col-md-12" id="separacao">
                    1.2.4. Processamento da informação do Segundo Responsável
                  </div>
                </div>
                <div class="col-md-12">
                  <label class="form-check-label">
                    Existe um Serviço Externo encarregado do processamento do
                    Segundo Responsável?
                  </label>
                  <buttom
                    @click="changeServicoSR"
                    type="button"
                    class="btn btn-outline-primary"
                    name="moradaSR"
                    id="moradasimbotton"
                  >
                    {{ checkServicoSR ? "Não" : "Sim" }}
                  </buttom>
                </div>
                <div class="col-md-12"><br /></div>
                <div class="col-md-12" v-if="checkServicoSR">
                  <div class="col-md-12">
                    <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="entidade_processamento_informacaoSR"
                      id="entidade_processamento_informacaoSR"
                      v-model="entidade_processamento_informacaoSR"
                      placeholder=" Qual a Entidade Encarregue pelo proccessamento dos dados"
                    />
                    <ErrorMessage
                      class="errorMessage"
                      name="entidade_processamento_informacaoSR"
                    />
                  </div>
                  <div class="col-md-12">
                    <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="rua_processamento_informacaoSR"
                      id="rua_processamento_informacaoSR"
                      v-model="rua_processamento_informacaoSR"
                      placeholder=" Rua"
                    /> 
                  </div>
                  <div class="col-md-12">
                    <Field 
                      type="text"
                      class="form-control"
                      name="caixapostal_processamento_informacaoSR"
                      id="caixapostal_processamento_informacaoSR"
                      v-model="caixapostal_processamento_informacaoSR"
                      placeholder=" Caixa Postal"
                    /> 
                  </div>
                  <div class="col-md-12">
                    <Field
                      :rules="validateText"
                      type="text"
                      class="form-control"
                      name="local_processamento_informacaoSR"
                      id="local_processamento_informacaoSR"
                      v-model="local_processamento_informacaoSR"
                      placeholder="Cidade/Vila/Lugar/Zona da Entidade"
                    />
                    <ErrorMessage
                      class="errorMessage"
                      name="local_processamento_informacaoSR"
                    />
                  </div>

                  <div class="col-md-12">
                    <div class="row">
                      <div class="col">
                        <Field
                          as="select"
                          class="form-select"
                          v-model="ilhaServExtSR"
                          name="ilhaServExtSR"
                          id="ilhaServExtSR"
                          for="ilhaServExtSR"
                          :rules="validateRadio"
                          placeholder="- Seleciona uma ilha-"
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
                        <ErrorMessage
                          class="errorMessage"
                          name="ilhaServExtSR"
                        />
                      </div>
                      <div class="col">
                        <Field
                          as="select"
                          class="form-select"
                          v-model="concelhoServExtSR"
                          name="concelhoServExtSR"
                          id="concelhoServExtSR"
                          for="concelhoServExtSR"
                          :rules="validateRadio"
                        >
                          <option value="">- selecione um concelho -</option>
                          <option
                            v-for="concelho in concelhos[ilhaServExtSR]"
                            :key="concelho.value"
                            :value="concelho.value"
                          >
                            {{ concelho.value }}
                          </option>
                        </Field>
                        <ErrorMessage
                          class="errorMessage"
                          name="concelhoServExtSR"
                        />
                      </div>
                    </div>
                  </div>

                  <p id="p">
                    * Caso exista mais que uma entidade, deverá anexar uma lista
                    de todas as entidades que processam os dados, com que fim e
                    quais os dados tratados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <!---- ----------------- FORMAS E MEIOS DE INTERCONEXAO-------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  2. Descrição de formas de interconexão (pode ser preenchido
                  pela primeira ou segunda entidade de interconexão)
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <Field
                  name="descricao_forma_interconexao"
                  id="descricao_forma_interconexao"
                  as="textarea"
                  class="form-control"
                  v-model="descricao_forma_interconexao"
                  :rules="validateText" 
                  placeholder=" Como serão facultados os dados na interconexão" />
                <ErrorMessage class="errorMessage" name="descricao_forma_interconexao" /> 
              </div>
            </div>
          </div>
        </div>

      

        <!---- ----------------- FINALIDADE DO TRATAMENTO-------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  3. Finalidade do tratamento (primeira entidade de
                  interconexão)
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
        <!---- ----------------- Dados sujeitos a conexão-------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  4. Dados sujeitos a conexão (primeira entidade de
                  interconexão)
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
                  name="outrosDadosArt8e11"
                  as="textarea"
                  class="form-control"
                  v-model="outrosDadosArt8e11" 
                  placeholder=" Mencionar quais os outros dados tratados referentes aos artigos 8º e 11º da lei nº. 121/IX/2021 de 17 de março "
                 /> 
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
                  v-model="listaDadosPessoaisTratados"
                  :rules="validateText"
                  placeholder=" Mencionar todos os dados pessoais tratados EX: nome, BI, NIF, Registo criminal, etc"
                 />
                <ErrorMessage class="errorMessage" name="listaDadosPessoaisTratados" />
               
              </div>
            </div>
          </div>
        </div>
        <!---- ----------------- Comunicaçao dos dados a terceiros-------------------------------------------------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  5. Comunicação dos Dados a terceiros (primeira entidade de
                  interconexão)
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
                    <div class="col-md-5">
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
                    <div class="col-md-6">
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

        <!---- ----------------- Prazo conservacao dos dados-------------------------------------------------------------------->

        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  6. Prazo máximo de conservação dos Dados pessoais (primeira
                  entidade de interconexão)
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-4">
                <label class="form-check-label">
                  Qual o prazo máximo de conservação dos dados?
                </label>
              </div>
              <div class="col-md-8">
                <Field
                        :rules="validateText"
                        type="text"
                        class="form-control"
                        name="prazoConserva"
                        v-model="prazoConserva"
                  placeholder=" Indique por quanto tempo os dados serão conservados"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="prazoConserva"
                      />   
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
                  7. Fluxos internacionais de dados para outros países (primeira
                  entidade de interconexão)
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
                    <div class="col-md-4">
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
                    <div class="col-md-3">
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
                    <div class="col-md-4">
                      <Field  
                  class="form-control" 
                  :rules="validateText"
                  v-model="inter.dadosTransferidos" 
                        :name="'dadosTransferidos ' + (index + 1)"
                        id="dadosTransferidos"
                        :placeholder="'Quais os Dados que são transferidos '"
                        />
                <ErrorMessage class="errorMessage"  :name="'dadosTransferidos ' + (index + 1)" />
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
         <!--------------------------------DIREITO ACESSO---------------------------->
         <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                8.Exercício do direito de acesso às imagens gravadas
              </div>
              <div class="col">
                <label class="form-check-label">
                  Morada do local do exercício do direito de acesso é a mesma
                  indicada em 1?
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
              <div class="col-md-12" id="divg2" v-if="checkDireitoAcesso">
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="rua_direito_acesso"
                    id="rua_direito_acesso"
                    v-model="rua_direito_acesso"
                    placeholder="Rua do Responsável pelo tratamento"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    type="text"
                    class="form-control"
                    name="caixapostal_direito_acesso"
                    id="caixapostal_direito_acesso"
                    v-model="caixapostal_direito_acesso"
                    placeholder=" Caixa Postal"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="local_direito_acesso"
                    id="local_direito_acesso"
                    v-model="local_direito_acesso"
                    placeholder=" Local - Cidade/Vila/Lugar/Zona"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="local_direito_acesso"
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
                        placeholder="- Seleciona uma ilha-"
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
                        name="email_direito_acesso"
                        id="email_direito_acesso"
                        v-model="email_direito_acesso"
                        placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="email_direito_acesso"
                      />
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateNumber"
                        type="number"
                        class="form-control"
                        name="contato_direito_acesso"
                        v-model="contato_direito_acesso"
                        placeholder="Contato: Telefone/Telemovel"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="contato_direito_acesso"
                      />
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
                  id="forma_direito_acesso"
                  name="forma_direito_acesso"
                  value="Presencial"
                  v-model="forma_direito_acesso"
                />
                <label> Presencial</label>
              </div>
              <div class="col-md-2" id="alignCenter">
                <Field
                  :rules="validateRadio"
                  type="checkbox"
                  id="forma_direito_acesso"
                  name="forma_direito_acesso"
                  value="Escrita"
                  v-model="forma_direito_acesso"
                />
                <label> Escrita</label>
              </div>

              <div class="col-md-12" id="alignCenter">
                <ErrorMessage
                  class="errorMessage"
                  name="forma_direito_acesso"
                />
              </div>
              <div class="col-md-12">
                <Field
                  name="outraforma_direito_acesso"
                  as="textarea"
                  class="form-control"
                  v-model="outraforma_direito_acesso"
                  placeholder=" Mencionar outras formas de direito de acesso, caso não for mencionado acima"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                9. Medidas de segurança a implementar
              </div>
              <div class="col-md-12">
                <label id="labelleft" class="form-check-label">
                  Especifique as medidas físicas de segurança do sistema:
                </label>
                <Field
                  name="medidas_fisicas_seguranca"
                  as="textarea"
                  class="form-control"
                  v-model="medidas_fisicas_seguranca"
                  :rules="validateText"
                  placeholder="Ocorre quando temos barreiras físicas que impeçam que pessoas não autorizadas tenham acesso a espaços onde os dados estão guardados"
                />
                <ErrorMessage
                  class="errorMessage"
                  name="medidas_fisicas_seguranca"
                />
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label id="labelleft" class="form-check-label">
                  Especifique as medidas lógica de segurança do sistema:
                </label>
                <Field
                  name="medidas_logicas_seguranca"
                  as="textarea"
                  class="form-control"
                  v-model="medidas_logicas_seguranca"
                  :rules="validateText"
                  placeholder="Consiste na implementação de chaves de acesso, encriptação do conteúdo e registos de operações efectuadas no sistema"
                />
                <ErrorMessage
                  class="errorMessage"
                  name="medidas_logicas_seguranca"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12"><br /></div>
        <!-- FIM DE FORMS-->
        <div class="col-12" id="divsave">
          <button
            id="buttonsave"
            value="Save"
            class="btn btn-primary"
            type="submit"
          >
            <IconAwe class="icon-color" icon="paper-plane" /> Submeter Dados
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
            <!------------------FIM DE MODAL SHOW------------------------->
      </Form>
    </div>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import { API_ENDPOINT } from "../main.js";

import { Form, Field, ErrorMessage } from "vee-validate";

import axios from "axios";

export default {
  components: {
    Multiselect,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      
      checkMorada: false,
      checkServico: false,
      checkServicoSR: false,
      checkDireitoAcesso: false,
      checkComunicTerce: false,
      checkTransfInter: false,

      /**************************TIPO NOTIFICACAO *********************************** */
      tipoNotificacao: null,
      /**********************************ATIVIDADE DESENVOLVIDA*********************************************** */
      atividade: null,
      atividadeSR: null, 
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

      concelhoServExtSR: null,
      ilhaServExtSR: null,
      ilhaRespSR: null,
      concelhoRespSR: null,
      ilhaMorRepSR: null,
      concelhoMorRepSR: null,

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
      finalidade: null,
     // categoria: null, 

     
      
      finalidadesCategorias: {
        "Gestão contabilidade, fiscal e administrativa": [
          { 
            value: "Gestão fiscal",
            label: "Gestão fiscal",
          },
          { 
            value: "Gestão administrativa",
            label: "Gestão administrativa",
          },
          { 
            value: "Gestão de faturação",
            label: "Gestão de faturação",
          },
          { 
            value: "Gestão de clientes",
            label: "Gestão de clientes",
          },
          { 
            value: "Gestão de cobranças e pagamentos",
            label: "Gestão de cobranças e pagamentos",
          },
          { 
            value: "Gestão de fornecedores",
            label: "Gestão de fornecedores",
          },
          { 
            value: "Gestão de condomínios",
            label: "Gestão de condomínios",
          },
          { 
            value: "Consultorias, auditorias e serviços relacionados",
            label: "Consultorias, auditorias e serviços relacionados",
          },
          {
            id: 62,
            value: "Histórico de relações comerciais",
            label: "Histórico de relações comerciais",
          },
        ],

        "Gravação de Chamadas": [
          { 
            value: "Gravação de chamadas na relação contratual",
            label: "Gravação de chamadas na relação contratual",
          },
          { 
            value: "Gravação de chamadas de emergência",
            label: "Gravação de chamadas de emergência",
          },
          { 
            value: "Gravação para monitorização da qualidade serviço",
            label: "Gravação para monitorização da qualidade serviço",
          },
        ],
        "Recursos Humanos": [
          { 
            value: "Gestão de recursos humanos",
            label: "Gestão de recursos humanos",
          },
          { 
            value: "Processamento de remuneração",
            label: "Processamento de remuneração",
          },
          { 
            value: "Formação profissional",
            label: "Formação profissional",
          },
          { 
            value: "Gestão de sanções disciplinar",
            label: "Gestão de sanções disciplinar",
          },
          { 
            value: "Seleção de pessoal e recrutamento",
            label: "Seleção de pessoal e recrutamento",
          },
          { 
            value: "Gestão de trabalho temporário",
            label: "Gestão de trabalho temporário",
          },
          { 
            value: "Gestão de teletrabalho",
            label: "Gestão de teletrabalho",
          },
          { 
            value: "Medicina no trabalho",
            label: "Medicina no trabalho",
          },
          { 
            value: "Controlo de horário / assiduidade",
            label: "Controlo de horário / assiduidade",
          },
          { 
            value: "Controlo de emails, acessos à internet e chamadas",
            label: "Controlo de emails, acessos à internet e chamadas",
          },
          { 
            value: "Controlo de alcoolemia e produtos psicotrópicos",
            label: "Controlo de alcoolemia e produtos psicotrópicos",
          },
          { 
            value: "Linhas de ática (Whistle blowing)",
            label: "Linhas de ática (Whistle blowing)",
          },
          { 
            value: "Controlo por GPS/GSM/RFID",
            label: "Controlo por GPS/GSM/RFID",
          },
        ],
        "Telecomunicações": [
          { 
            value: "Gestão da faturação",
            label: "Gestão da faturação",
          },
          { 
            value: "Retenção de dados de trafego/localização",
            label: "Retenção de dados de trafego/localização",
          },
          { 
            value: "Gestão de contencioso",
            label: "Gestão de contencioso",
          },
          { 
            value: "Gestão de pedidos interceção judiciais das comunicações",
            label: "Gestão de pedidos interceção judiciais das comunicações",
          },
          { 
            value: "Gestão de pedidos da lei",
            label: "Gestão de pedidos da lei",
          },
          { 
            value: "Gestão de pedidos de GPS",
            label: "Gestão de pedidos da GPS",
          },
        ],
        "Actividade Social": [
          { 
            value: "Gestão de utentes",
            label: "Gestão de utentes",
          },
          { 
            value: "Gestão de apoio domiciliário",
            label: "Gestão de apoio domiciliário",
          },
          { 
            value: "Atribuição ou prestação de sociais",
            label: "Atribuição ou prestação de sociais",
          },
          { 
            value: "Gestão de linhas telefónicas de apoio ",
            label: "Gestão de linhas telefónicas de apoio ",
          },
        ],
        "Actividade Financeira, Creditícia e Seguradora": [
          { 
            value: "Gestão de clientes",
            label: "Gestão de clientes",
          },
          { 
            value: "Avaliação de risco de crédito",
            label: "Avaliação de risco de crédito",
          },
          { 
            value: "Titularização de créditos",
            label: "Titularização de créditos",
          },
          { 
            value: "Cessão de créditos ",
            label: "Cessão de créditos ",
          },
          { 
            value: "Prospecção das opções de crédito ",
            label: "Prospecção das opções de crédito ",
          },
          { 
            value: "Gestão de créditos extrajudiciais ",
            label: "Gestão de créditos extrajudiciais ",
          },
          { 
            value: "Informação e negócios",
            label: "Informação e negócios",
          },
          { 
            value: "Gestão de seguros de vida",
            label: "Gestão de seguros de vida",
          },
          { 
            value: "Gestão de seguros de não vida",
            label: "Gestão de seguros de  não vida",
          },
          { 
            value: "Gestão de seguros automóveis",
            label: "Gestão de seguros automóveis",
          },
          { 
            value: "Gestão de seguros de acidentes pessoais",
            label: "Gestão de seguros de acidentes pessoais",
          },
          { 
            value: "Gestão de seguros de acidentes de trabalho",
            label: "Gestão de seguros de acidentes de trabalho",
          },
          { 
            value: "Gestão de seguros de acidentes de outra natureza",
            label: "Gestão de seguros de acidentes de outra natureza",
          },
          { 
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
            value: "Gestão de alunos",
            label: "Gestão de alunos",
          },
          { 
            value: "Gestão de docentes",
            label: "Gestão de docentes",
          },
          { 
            value: "Promoção e inserção na vida profissional",
            label: "Promoção e inserção na vida profissional",
          },
          { 
            value: "Gestão de apoios sociais ",
            label: "Gestão de apoios sociais ",
          },
          { 
            value: "Gestão de sites escolares ",
            label: "Gestão de sites escolares",
          },
        ],
        "Saúde": [
          { 
            value: "Gestão de processos clínicos",
            label: "Gestão de processos clínicos",
          },
          { 
            value: "Prescrição medicamentos electrónica",
            label: "Prescrição medicamentos electrónica",
          },
          { 
            value: "Gestão administrativa de utentes",
            label: "Gestão administrativa de utentes",
          },
          { 
            value: "Etudos clínicos observacionais(não intervencionais) ",
            label: "Etudos clínicos observacionais(não intervencionais)",
          },
          { 
            value: "Ensaios clínicos (intervencionais)",
            label: "Ensaios clínicos (intervencionais)",
          },
          { 
            value: "Farmacovigilância",
            label: "Farmacovigilância",
          },
          { 
            value: "Gestão de utentes de farmácia",
            label: "Gestão de utentes de farmácia",
          },
          { 
            value: "Sistema de apoio à prática de enfermagem",
            label: "Sistema de apoio à prática de enfermagem",
          },
        ],
        "Actividade Comercial e de Marketing": [
          { 
            value: "Marketing",
            label: "Marketing",
          },
          { 
            value: "Sondagem e inquéiritos de opinião",
            label: "Sondagem e inquéiritos de opinião",
          },
          { 
            value: "Analise e perfis de consumo",
            label: "Analise e perfis de consumo",
          },
          { 
            value: "Gestão de clientes ",
            label: "Gestão de clientes ",
          },
          { 
            value: "Fidelização de clientes ",
            label: "Fidelização de clientes",
          },
          { 
            value: "Registro de utilizadores em site da internet ",
            label: "Registro de utilizadores em site da internet",
          },
        ],
      },
      
       
      /** **************************ADD COMUNICACACO A TERCEIROS********************************* */
      comunicacao: [
        {
        //  condicoesComunicacao: "",
        //  entidadesComunicadas: "",
        },
      ],
      /** *************************TRANSFERENCIA INTERNACIONAL********************************* */

      internacional: [
        {
          dadosTransferidos: "",
          entidadesInternacional: "",
          paisTransferido: "",
        },
      ],
      /************************************CATEGORIA DE FINALIDADE*********************************** */
      finalidadiCategory: [
        {
          //categoria: "",
         // finalidadesCategorias: "",
        //  categoria:[],
         //finalidade:[],
        },
      ],

      /********************************DADOS PESSOAIS TRATADOS**********************************************/
      dadosPessoaisTratado: null,
      dadospessoaisTratados: [
        {
          value: "Convicções ou filiação partidária ou sindical, fé religiosa",
          label: "Convicções ou filiação partidária ou sindical, fé religiosa",
        },
        {
          value: "Convicções filosóficas ou ideológicas",
          label: "Convicções filosóficas ou ideológicas",
        },
        { value: "Origem racial ou étnica", label: "Origem racial ou étnica" },
        { value: "Vida Privada", label: "Vida Privada" },
        {
          value: "Dados da saúde, vida sexual ou genéticos",
          label: "Dados da saúde, vida sexual ou genéticos",
        },
        {
          value: "Suspeitas de atividades ilícitas",
          label: "Suspeitas de atividades ilícitas",
        },
        { value: "Condenações penais", label: "Condenações penais" },
        {
          value: "Decisões que apliquem medidas de segurança",
          label: "Decisões que apliquem medidas de segurança",
        },
        {
          value: "Coímas, sansões acessórias",
          label: "Coímas, sansões acessórias",
        },
        {
          value: "Infrações penais e Contra-ordenações",
          label: "Infrações penais e Contra-ordenações",
        },
        {
          value:
            "Outros dados referentes ao art. 8º e 11º da lei nº.121/IX/2021 de 17 de março",
          label:
            "Outros dados referentes ao art. 8º e 11º da lei nº.121/IX/2021 de 17 de março",
        },
      ],

      tipoNotificacoes: [
            { "value": "1ª Notificação", "label": "1ª Notificação" },
            { "value": "Alteração", "label": "Alteração" },
            { "value": "Substituição da Notificação não autorizada", 
            "label": "Substituição da Notificação não autorizada" }
          ],
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
        ilhas: [
            { "value": "Santo Antão", "label": "Santo Antão" },
            { "value": "São Vicente", "label": "São Vicente" },
            { "value": "São Nicolau", "label": "São Nicolau" },
            { "value": "Sal", "label": "Sal" },
            { "value": "Boa Vista", "label": "Boa Vista" },
            { "value": "Maio", "label": "Maio" },
            { "value": "Santiago", "label": "Santiago" },
            { "value": "Fogo", "label": "Fogo" },
            { "value": "Brava", "label": "Brava" }
          ],
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
      /**************************************************************************************************** */
            tipo_notificacao:"",
            tipo_pessoa:"",
            nome_denominacao:"",
            nome_comercial:"",
            atividade_desenvolvida:"",
            numero_nif:"",
            rua_responsavel_tratamento:"",
            local_responsavel_tratamento:"",
            ilha_responsavel_tratamento:"",
            concelho_responsavel_tratamento:"",
            caixapostal_responsavel_tratamento:"",
            contato_responsavel_tratamento:"",
            email_responsavel_tratamento:"",
            pais_responsavel_tratamento:"",
            nome_representante_instalacao:"",
            rua_representante_instalacao:"",
            caixapostal_representante_instalacao:"",
            local_representante_instalacao:"",
            ilha_representante_instalacao:"",
            pais_representante_instalacao:"",
            concelho_representante_instalacao:"",
            nome_pessoa_contato_representante_instalacao:"",
            email_pessoa_representante_instalacao:"",
            contato_representante_instalacao:"",
            entidade_processamento_informacao:"",
            rua_processamento_informacao:"",
            caixapostal_processamento_informacao:"",
            local_processamento_informacao:"",
            ilha_processamento_informacao:"",
            concelho_processamento_informacao:"", 
            tipo_pessoaSR:"",
            nome_denominacaoSR:"",
            nome_comercialSR:"",
            atividadeDesenvolvidaSR:"",
            numero_nifSR:"",
            rua_responsavel_tratamentoSR:"",
            local_responsavel_tratamentoSR:"",
            ilha_responsavel_tratamentoSR:"",
            concelho_responsavel_tratamentoSR:"",
            caixapostal_responsavel_tratamentoSR:"",
            contato_responsavel_tratamentoSR:"",
            email_responsavel_tratamentoSR:"",
            pais_responsavel_tratamentoSR:"",
            nome_representante_instalacaoSR:"",
            rua_representante_instalacaoSR:"",
            caixapostal_representante_instalacaoSR:"",
            local_representante_instalacaoSR:"",
            ilha_representante_instalacaoSR:"",
            concelho_representante_instalacaoSR:"",
            pais_representante_instalacaoSR:"",
            nome_pessoa_contato_representante_instalacaoSR:"",
            email_pessoa_representante_instalacaoSR:"",
            contato_representante_instalacaoSR:"",
            entidade_processamento_informacaoSR:"",
            rua_processamento_informacaoSR:"",
            caixapostal_processamento_informacaoSR:"",
            local_processamento_informacaoSR:"",
            ilha_processamento_informacaoSR:"",
            concelho_processamento_informacaoSR:"",
            descricao_forma_interconexao:"",
            arrayfinalidades:"",
            outraFinalidadeTratamento:"",
            dados_pessoais_tratado:"",
            outros_dados_art8e11:"",
            listadados_pessoais_tratados:"",
            prazo_conservacao_dados:"",
            rua_direito_acesso: "",
            caixapostal_direito_acesso: "",
            local_direito_acesso: "",
            email_direito_acesso: "",
            contato_direito_acesso: "",
            ilha_direito_acesso: "",
            concelho_direito_acesso: "",
            forma_direito_acesso: "",
            outraforma_direito_acesso: "",
            medidas_fisicas_seguranca: "",
            medidas_logicas_seguranca: "",
                  

      
    };
  },

  methods: {
    async onSubmit() {
      const datas = {
        tipo_notificacao: this.tipoNotificacao,
        tipo_pessoa: this.tipoPessoa,
        nome_denominacao: this.nome_denominacao,
        nome_comercial: this.nome_comercial,
        atividade_desenvolvida: this.atividadeDesenvolvida,
        numero_nif: this.numero_nif,
        rua_responsavel_tratamento: this.rua_responsavel_tratamento,
        local_responsavel_tratamento: this.local_responsavel_tratamento,
        ilha_responsavel_tratamento: this.ilhaResp,
        concelho_responsavel_tratamento: this.concelhoResp,
        caixapostal_responsavel_tratamento:
          this.caixapostal_responsavel_tratamento,
          contato_responsavel_tratamento: this.contato_responsavel_tratamento,
        email_responsavel_tratamento: this.email_responsavel_tratamento,
        pais_responsavel_tratamento: this.pais_responsavel_tratamento,
        nome_representante_instalacao: this.nome_representante_instalacao,
        rua_representante_instalacao: this.rua_representante_instalacao,
        caixapostal_representante_instalacao:
          this.caixapostal_representante_instalacao,
        local_representante_instalacao: this.local_representante_instalacao,
        ilha_representante_instalacao: this.ilhaMorRep,
        concelho_representante_instalacao: this.concelhoMorRep,
        nome_pessoa_contato_representante_instalacao:
          this.nome_pessoa_contato_representante_instalacao,
        email_pessoa_representante_instalacao:
          this.email_pessoa_representante_instalacao,
        contato_representante_instalacao: this.contato_representante_instalacao, 
        entidade_processamento_informacao:
          this.entidade_processamento_informacao,
        rua_processamento_informacao: this.rua_processamento_informacao,
        caixapostal_processamento_informacao:
          this.caixapostal_processamento_informacao,
        local_processamento_informacao: this.local_processamento_informacao,
        ilha_processamento_informacao: this.ilhaServExt,
        concelho_processamento_informacao: this.concelhoServExt, 
        tipo_pessoaSR: this.tipoPessoaSR,
        nome_denominacaoSR: this.nome_denominacaoSR,
        nome_comercialSR: this.nome_comercialSR,
        atividade_desenvolvidaSR: this.atividadeDesenvolvidaSR,
        numero_nifSR: this.numero_nifSR,
        rua_responsavel_tratamentoSR: this.rua_responsavel_tratamentoSR,
        local_responsavel_tratamentoSR: this.local_responsavel_tratamentoSR,
        ilha_responsavel_tratamentoSR: this.ilhaRespSR,
        concelho_responsavel_tratamentoSR: this.concelhoRespSR,
        caixapostal_responsavel_tratamentoSR:
          this.caixapostal_responsavel_tratamentoSR,
          contato_responsavel_tratamentoSR: this.contato_responsavel_tratamentoSR,
        email_responsavel_tratamentoSR: this.email_responsavel_tratamentoSR,
        pais_responsavel_tratamentoSR: this.pais_responsavel_tratamentoSR,
        nome_representante_instalacaoSR: this.nome_representante_instalacaoSR,
        rua_representante_instalacaoSR: this.rua_representante_instalacaoSR,
        caixapostal_representante_instalacaoSR:
          this.caixapostal_representante_instalacaoSR,
        local_representante_instalacaoSR: this.local_representante_instalacaoSR,
        ilha_representante_instalacaoSR: this.ilhaMorRepSR,
        concelho_representante_instalacaoSR: this.concelhoMorRepSR,
        nome_pessoa_contato_representante_instalacaoSR:
          this.nome_pessoa_contato_representante_instalacaoSR,
        email_pessoa_representante_instalacaoSR:
          this.email_pessoa_representante_instalacaoSR,
        contato_representante_instalacaoSR: this.contato_representante_instalacaoSR, 
        entidade_processamento_informacaoSR:
          this.entidade_processamento_informacaoSR,
        rua_processamento_informacaoSR: this.rua_processamento_informacaoSR,
        caixapostal_processamento_informacaoSR:
          this.caixapostal_processamento_informacaoSR,
        local_processamento_informacaoSR: this.local_processamento_informacaoSR,
        ilha_processamento_informacaoSR: this.ilhaServExtSR,
        concelho_processamento_informacaoSR: this.concelhoServExtSR,
        descricao_forma_interconexao:this.descricao_forma_interconexao,         
        array_finalidades: this.finalidadiCategory,
        outraFinalidadeTratamento:this.outraFinalidadeTratamento,
        dados_pessoais_tratado:this.dadosPessoaisTratado,
        outros_dados_art8e11:this.outrosDadosArt8e11,
        listadados_pessoais_tratados:this.listaDadosPessoaisTratados,          
        array_comunicacao_terceiros: this.comunicacao, 
        prazo_conservacao_dados:this.prazoConserva,
        array_transferencia_internacional:this.internacional,
        entidade:this.dadosTransferidos,
        pais:this.paisTransferido,
        dados_transferidos:this.dadosTransferidos,
        rua_direito_acesso: this.rua_direito_acesso,
        caixapostal_direito_acesso: this.caixapostal_direito_acesso,
        local_direito_acesso: this.local_direito_acesso,
        ilha_direito_acesso: this.ilhaDirAcess,
        concelho_direito_acesso: this.concelhoDirAcess,
        email_direito_acesso: this.email_direito_acesso,
        contato_direito_acesso: this.contato_direito_acesso,
        forma_direito_acesso: this.forma_direito_acesso,
        outraforma_direito_acesso: this.outraforma_direito_acesso,
        medidas_fisicas_seguranca: this.medidas_fisicas_seguranca,
        medidas_logicas_seguranca: this.medidas_logicas_seguranca,

      };
       
         //SUBMIT FORM WITH AXIOS
    try {
      await axios.post(`${API_ENDPOINT}/api/interconexao/create`, datas, {  
        headers: { "Content-Type": "multipart/form-data; charset=utf-8" },
      }); 
      console.log(this.comunicacao);
      console.log(this.internacional);
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
    validateNumber(value) {
      // if the field is empty
      if (!value) {
        return "Campo obrigatório!";
      }
      // if the field is not a valid number
      const regex = /[0-9]/;
      if (!regex.test(value)) {
        return "Carater inválido, precisa ser um número!";
      }

      return true;
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
   /* async dadosBackend() {
      const req = await fetch("http://localhost:3000/dadosBackend");
      const data = await req.json();
      this.ilhas = data.ilhas;
      this.atividadesDesenvolvidas = data.atividadesDesenvolvidas;
      this.categorias = data.categorias;
      this.tipoNotificacoes = data.tipoNotificacoes;
    },*/

    addComunicTerce() {
      this.comunicacao.push({
        condicoesComunicacao: "",
        entidadesComunicadas: "",
      });
    },
    removeComunic(index) {
      this.comunicacao.splice(index, 1);
    },
    /*TRANSFER INTERNACIONAL*/
    addTransfInter() {
      this.internacional.push({
      //  dadosTransferidos: "",
       // entidadesInternacional: "",
       // paisTransferido: "",
      });
    },
    removeInter(index) {
      this.internacional.splice(index, 1);
    },
    /*FINALIDADES MULTIPLAS*/

    addFinalidd() {
      this.finalidadiCategory.push({
       // categoria: "",
       // finalidadesCategorias: "",
      });
    },
    removeFinalidd(index) {
      this.finalidadiCategory.splice(index, 1);
    },
    changeServico() {
      this.checkServico = !this.checkServico;
    },
    changeServicoSR() {
      this.checkServicoSR = !this.checkServicoSR;
    },
    changeDireitoAcesso() {
      this.checkDireitoAcesso = !this.checkDireitoAcesso;
    },

    changeComunicTerce() {
      this.checkComunicTerce = !this.checkComunicTerce;
    },
    changeTransfInter() {
      this.checkTransfInter = !this.checkTransfInter;
    },
  },

 /* mounted() {
    this.dadosBackend();
  },*/
  watch: {
    categoria() {
      this.finalidade = null;
    },
    tipoVideo() {
      this.zona = null;
    },
  },
};
</script>

<style>
#p{
  font-weight: bold;
  color:#000;
  font-family: "Times New Roman", Times, serif;
}
#cambs {
  margin-top: 5px;
}
.add {
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
}
.Interconexao {
  font-family: "Times New Roman", Times, serif;
  /*padding-top: 110px;*/
}
.container {
  font-family: "Times New Roman", Times, serif;
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
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
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
.col,
.row {
  font-family: "Times New Roman", Times, serif;
}
input,
label,
textarea {
  font-family: "Times New Roman", Times, serif;
}
input {
  margin-bottom: 10px;
}
input.form-control:focus,
select.form-select:focus,
textarea.form-control:focus {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
}
option:hover {
  background-color: #061536;
}
.form-check-input:checked {
  background-color: #061536;
}

.form-check-input:checked + label {
  color: #061536;
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
#separacao1 {
  font-family: "Times New Roman", Times, serif;
  padding-left: 10px;
  color: #061536;
  font-weight: bold;
}
#labelleft {
  text-align: left;
}
#divloco {
  margin-top: 10px;
}
 

.icon-box {
  background-color: white;
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

 

</style>
