<template>
  <section id="tic" class="tic">
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
          <router-link style="text-decoration: none" to="/formstic">
            <b>Formulário de TIC</b>
          </router-link>
        </h5>
      </div>
      <Form @submit="submitForm" method="POST" enctype="multipart/form-data">
        <!-- FORMS tic-->
        <div class="section-title">
          <h2>
            Notificação do controlo de utilização de tefone/correio electtrónico
            e internet
          </h2>
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
              <div class="col-md-12" id="separacao">
                1. Responsável pelo Tratamento
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-4"></div>
              <div class="col-md-2" id="alignCenter">
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
              <div class="col-md-2" id="alignCenter">
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
                  v-model="nome_denominacao"
                  name="nomedenominacao"
                  type="text"
                  class="form-control"
                  id="nomedenominacao"
                  alt="Nome Denominação: Refere-se à designação oficial de uma instituição pública ou privada"
                  placeholder=" Nome/Denominação"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="nomedenominacao" />
              </div>
              <div class="col-md-12">
                <input
                  v-model="nome_comercial"
                  type="text"
                  class="form-control"
                  id="nomecomercial"
                 
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
                 
                  v-model="numero_nif"
                  name="nif"
                  type="number"
                  class="form-control"
                  id="nif"
                  alt="NIF"
                  placeholder="Número de NIF"
                  :rules="validateNumber"
                />
                <ErrorMessage class="errorMessage" name="nif" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <input
                      v-model="rua_responsavel_tratamento"
                      type="text"
                      class="form-control"
                      id="rua"
                      alt="RUA"
                      placeholder="Entre o nome da Rua"
                    />
                  </div>
                  <div class="col">
                    <Field
                      v-model="local_responsavel_tratamento"
                      name="local"
                      type="text"
                      class="form-control"
                      id="local"
                      alt="Local"
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
                      v-model="caixapostal_responsavel_tratamento"
                      type="text"
                      class="form-control"
                      id="caixapostal"
                      alt="Caixa Postal"
                      placeholder="Entre o número da Caixa Postal"
                    />
                  </div>
                  <div class="col">
                    <Field
                      v-model="telefone_responsavel_tratamento"
                      name="telefone"
                      type="number"
                      class="form-control"
                      id="telefone"
                      alt="Telefone/Telemovel"
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
                      v-model="email_responsavel_tratamento"
                      name="email"
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Entre o seu email: example@cnpd.cv"
                      :rules="validateEmail"
                    />
                    <ErrorMessage class="errorMessage" name="email" />
                  </div>
                  <div class="col-md-6">
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="paisResp"
                        name="paisResp"
                        value="Cabo Verde"
                        v-model="paisResp"
                      />
                      <label for="Cabo Verde"> Cabo Verde </label>
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateRadio"
                        type="radio"
                        id="paisResp"
                        name="paisResp"
                        value=" Fora do Território Nacional"
                        v-model="paisResp"
                      />
                      <label for=" Fora do Território Nacional">  Fora do Território Nacional</label>
                    </div> 
                    <div class="col-md-6">
                      <ErrorMessage class="errorMessage" name="paisResp" />
                    </div> 
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <Field
                  v-model="nome_representante_tratamento"
                  name="representante"
                  type="text"
                  class="form-control"
                  id="representante"
                   placeholder="Representante"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="representante" />
              </div>
              
              <div class="col-md-12">
                <input
                  v-model="rua_representante_tratamento"
                  type="text"
                  class="form-control"
                  id="ruaRI" 
                  name="ruaRI"
                  placeholder=" Rua"
                />
              </div>
              <div class="col-md-12">
                <input
                  v-model="caixapostal_representante_tratamento"
                  type="text"
                  class="form-control"
                  id="caixaPostalRI" 
                  name="caixaPostalRI"
                  placeholder=" Caixa Postal"
                />
              </div>
              <div class="col-md-12">
                <Field
                  v-model="local_representante_tratamento"
                  name="localRepresentante"
                  type="text"
                  class="form-control"
                  id="localRepresentante"  
                  placeholder=" Cidade/Vila/Lugar/Zona"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="localRepresentante" />
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
                      placeholder="- Seleciona uma ilha-"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione uma ilha -</option>
                      <option
                        v-for="option in ilhas"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
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
                      placeholder="- Seleciona um concelho -"
                      :rules="validateRadio"
                    >
                      <option value="">- selecione um concelho -</option>
                      <option
                        v-for="option in concelhos[ilhaMorRep]"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </Field>
                    <ErrorMessage class="errorMessage" name="concelhoMorRep" />
                  </div>
                </div>
              </div>
              <div class="col-md-12" id="divloco">
                <Field
                  v-model="nome_pessoa_contato"
                  type="text"
                  class="form-control"
                  name="nomePessoaContato"
                  id="nomePessoaContato" 
                  placeholder=" Nome da pessoa do contato"
                  :rules="validateText"
                />
                <ErrorMessage class="errorMessage" name="nomePessoaContato" />
              </div>
              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <Field
                      v-model="email_representante_tratamento"
                      name="emailRepresentante"
                      type="email"
                      class="form-control"
                      id="emailRepresentante" 
                      placeholder="Entre o seu email: example@cnpd.cv"
                      :rules="validateEmail"
                    />
                    <ErrorMessage class="errorMessage" name="emailRepresentante" />
                  </div>
                  <div class="col">
                    <Field
                      v-model="telefone_representante_tratamento"
                      name="telefoneRepresentante"
                      type="number"
                      class="form-control"
                      id="telefoneRepresentante" 
                      placeholder="Contato: Telefone/Telemovel"
                      :rules="validateNumber"
                    />
                    <ErrorMessage class="errorMessage" name="telefoneRepresentante" />
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
        <!--------------------------------------FINALIDADE DO TRATAMENTO----------------------------------------------------->

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  2. Finalidade do tratamento
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col">
                <Multiselect
                  v-model="finalidade"
                  name="finalidadetra"
                  id="finalidadetra"
                  placeholder="- Indique a(s) finalidade(s) do tratamento-"
                  mode="tags"
                  :close-on-select="false"
                  :searchable="true"
                  :create-option="true"
                  :options="finalidadeTratamento"
                />
              </div>
            </div>
          </div>
        </div>
    <!---- ----------------- DADOS PESSOAIS  CONTIDOS DO TRATAMENTO-------------------------------------------------------------------->
    <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  3. Dados pessoais contidos em cada registo
                </div>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label class="form-check-label">
                  
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
                        placeholder="- selecione  os dados pessoais tratados -"
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
                 
                </div>
              </div>
            </div>
          </div>
        </div>
    
 
 
        <div class="col" id="divg"> 
              <div class="col-md-12" id="divloco">
                <div class="col-md-12" id="separacao">
                  4. Trabalhadores abrangidos por especial obrigação de sigilo
                </div>
                <div class="col-md-12"><br /></div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <Multiselect
                      v-model="trabalhadores_abrangido_obrigacao_sigilo"
                      name="trabalhadores"
                      id="finalidadetra"
                      placeholder="- Indique os trabalhadores abrangidos por especial obrigação do sigilo-"
                      mode="tags"
                      :close-on-select="false"
                      :searchable="true"
                      :create-option="true"
                      :options="trabalhadorAbra"
                    />
                  </div>
                </div>
              </div> 
        </div>

        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                5.Exercício do direito de acesso 
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
                        v-model="rua_direito_acesso"
                        type="text"
                        class="form-control"
                        name="ruaDireitoAcesso"
                        id="ruaDireitoAcesso"
                        placeholder="Rua do Responsável pelo tratamento"
                      /> 
                </div>
                <div class="col-md-12">
                  <Field 
                        v-model="caixapostal_direito_acesso"
                        type="text"
                        class="form-control"
                        name="caixaPostalDireitoAcesso"
                        id="caixaPostalDireitoAcesso"
                    placeholder=" Caixa Postal"
                      />  
                </div>
                <div class="col-md-12">
                  <Field 
                        v-model="local_direito_acesso"
                        :rules="validateText"
                        type="text"
                        class="form-control"
                        name="localDireitoAcesso"
                        id="localDireitoAcesso"
                    placeholder=" Local - Cidade/Vila/Lugar/Zona"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="localDireitoAcesso"
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
                        v-model="email_direito_acesso"
                        :rules="validateEmail"
                        type="email"
                        class="form-control"
                        name="emailDireitoAcesso"
                        id="emailDireitoAcesso"
                        placeholder="Entre o email da pessoa de contato: example@cnpd.cv"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="emailDireitoAcesso"
                      />   
                    </div>
                    <div class="col">
                      <Field
                         v-model="telefone_direito_acesso"
                        :rules="validateNumber"
                        type="text"
                        class="form-control"
                        name="telefoneDireitoAcesso"
                        id="telefoneDireitoAcesso"
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

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                6. Representante dos trabalhadores
              </div>
              <div class="col-md-12"><br /></div>

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
                  pedido em formato PDF.</label
                >
                <Field
                  v-model="parecer_representante_trabalhadores" 
                  name="parecer_representante_trabalhadores"
                  class="form-control"
                  type="file"
                  ref="file"
                  :rules="validateText" 
                  accept="application/pdf"
                  
                />

                <!--accept="image/png, image/gif, image/jpeg"-->
                
                <ErrorMessage class="errorMessage" name="parecer_representante_trabalhadores" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                7. Medidas de segurança a implementar
              </div>

              <div class="col-md-12">
                <label
                  id="labelleft"
                  class="form-check-label"
                  for="formaDireitoAcesso"
                >
                  Especifique as medidas físicas de segurança do sistema:
                </label>
                <Field
                  name="medidasFisica"
                  as="textarea"
                  class="form-control"
                  v-model="medidade_seguranca_fisica"
                  :rules="validateText"
                  placeholder="Ocorre quando temos barreiras físicas que impeçam que pessoas não autorizadas tenham acesso a espaços onde os dados estão guardados"
                />
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
                  name="medidasLogica"
                  as="textarea"
                  class="form-control"
                  v-model="medidade_seguranca_logica"
                  :rules="validateText"
                  placeholder="Consiste na implementação de chaves de acesso, encriptação do conteúdo e registos de operações efectuadas no sistema"
                />
                <ErrorMessage class="errorMessage" name="medidasLogica" />
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">8. Regulamento interno</div>
              <div class="col-md-12"><br /></div>

              <div class="col">
                <label class="form-check-label">
                  Declaro que foi adotado regulamento interno que estabelece as
                  regras de utilização dos meios de comunicação e específica as
                  formas de controlo, em cumprimento dos limites e condições nos
                  termos da lei.
                </label>
                <buttom
                  @click="changeRegInterno"
                  type="button"
                  class="btn btn-outline-primary"
                  name="morada"
                  id="moradasimbotton"
                >
                  {{ checkRegInterno ? "Não" : "Sim" }}
                </buttom>
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12" v-if="checkRegInterno">
                <label for="formFile" class="form-label"
                  >Se sim, juntar a cópia do regulamento interno.</label
                >
                <Field class="form-control" accept="application/pdf" type="file" id="formFile" v-model="regulamento_interno"  :rules="validateText"  name="regulamento_interno"/>
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
    </div>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import axios from "axios";

import { API_ENDPOINT } from "../main.js";

import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Multiselect,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      nomeDenominacao: "",
      tipoPessoa:"",
      nome_denominacao:"",
      nome_comercial:"",
      numero_nif:"",
      rua_responsavel_tratamento:"",
      local_responsavel_tratamento:"",
      caixapostal_responsavel_tratamento:"",
      telefone_responsavel_tratamento:"",
      email_responsavel_tratamento:"",
      paisResp:"",
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
      rua_direito_acesso:"",
      caixapostal_direito_acesso:"",
      local_direito_acesso:"",
      email_direito_acesso:"",
      telefone_direito_acesso:"",
      formaDireitoAcesso:"",
      outrasformas_direito_acesso:"",
      parecer_representante_trabalhadores:"",
      regulamento_interno:"",
      medidade_seguranca_fisica:"",
      medidade_seguranca_logica:"",
      checkMorada: false,
      checkServico: false,
      checkServicoSR: false,
      checkDireitoAcesso: false,
      checkComunicTerce: false,
      checkTransfInter: false,
      checkRepTrab: false,
      checkRegInterno: false,
      atividadeDesenvolvida:"",
      trabalhadores_abrangido_obrigacao_sigilo:null,
      trabalhadorAbra: [
        { value: "Jornalista", label: "Jornalista" },
        { value: "Profissionais da saúde", label: "Profissionais da saúde" },
        { value: "Advogados", label: "Advogados" },
        { value: "Ministro de culto", label: "Ministro de culto" },
      ],
      finalidade:null,
      finalidadeTratamento: [
        {
          value: "Gestão dos meios da empresa",
          label: "Gestão dos meios da empresa",
        },
        {
          value: "Gestão da produtividade dos trabalhadores",
          label: "Gestão da produtividade dos trabalhadores",
        },
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
      /**********************************ATIVIDADE DESENVOLVIDA*********************************************** */

      /** *********************ILHAS E CONCELHOS ************************************** */
      ilhaResp: null,
      ilhaMorInst: null,
      ilhaServExt: null,
      ilhaDirAcess: null,
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
      selected: {},
      finalidd: null,
      categoria: null,

      categorias: [
        {
          id: 1,
          value: "Telefone",
          label: "Telefone",
        },
        {
          id: 2,
          value: "Correio electrónico",
          label: "Correio electrónico",
        },
        {
          id: 3,
          value: "Internet",
          label: "Internet",
        },
      ],

      finalidadesCategorias: {
        "Telefone": [
          {
            id: 1,
            value: "Telefone fixo",
            label: "Telefone fixo",
          },
          {
            id: 1,
            value: "Telefone móvel",
            label: "Telefone móvel",
          },
          {
            id: 1,
            value: "Utilizador",
            label: "Utilizador",
          },
          {
            id: 1,
            value: "Categoria/função",
            label: "Categoria/função",
          },
          {
            id: 1,
            value:
              "Número de telefone chamado, com supressão dos últimos quatro dítigos",
            label:
              "Número de telefone chamado, com supressão dos últimos quatro dítigos",
          },
          {
            id: 1,
            value: "Tipo de chamada(local, regional e internacional)",
            label: "Tipo de chamada(local, regional e internacional)",
          },
          {
            id: 1,
            value: "Duração da chamada",
            label: "Duração da chamada",
          },
          {
            id: 1,
            value: "Custo da comunicação",
            label: "Custo da comunicação",
          },
        ],

        "Correio electrónico": [
          {
            id: 1,
            value: "Endereço do destinatário",
            label: "Endereço do destinatário",
          },
          {
            id: 1,
            value: "Endereço do remetente",
            label: "Endereço do remetente",
          },
          {
            id: 1,
            value: "Assunto",
            label: "Assunto",
          },
          {
            id: 1,
            value: "Data e hora de envio",
            label: "Data e hora de envio",
          },
          {
            id: 1,
            value: "Tipos de ficheiros anexados(EXE, MP3, AVI etc)",
            label: "Tipos de ficheiros anexados(EXE, MP3, AVI etc)",
          },
        ],
        "Internet": [
          {
            id: 1,
            value: "Utilizador",
            label: "Utilizador",
          },
          {
            id: 2,
            value: "Data e hora de inicio e fim da conexão",
            label: "Data e hora de inicio e fim da conexão",
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
 
      /**************************************************************************************************** */

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

    };


    
  },

  methods: {

    addFinalidd() {
      this.finalidadiCategory.push({
       // categoria: "",
        //finalidadesCategorias: "",
      });
    },
    removeFinalidd(index) {
      this.finalidadiCategory.splice(index, 1);
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
        ilha_representante_tratamento:this.ilhaMorRep,
        concelho_representante_tratamento:this.concelhoMorRep,
        nome_pessoa_contato:this.nome_pessoa_contato,
        email_representante_tratamento:this.email_representante_tratamento,
        telefone_representante_tratamento:this.telefone_representante_tratamento,
        entidade_processamento_informacao:this.entidade_processamento_informacao,
        rua_entidade_processamento:this.rua_entidade_processamento,
        caixapostal_entidade_processamento:this.caixapostal_entidade_processamento,
        local_entidade_processamento:this.local_entidade_processamento,
        ilha_entidade_processamento:this.ilhaServExt,
        concelho_entidade_processamento:this.concelhoServExt,
        finalidade_tratamento:this.finalidade,
        trabalhadores_abrangido_obrigacao_sigilo:this.trabalhadores_abrangido_obrigacao_sigilo,
        rua_direito_acesso:this.rua_direito_acesso,
        caixapostal_direito_acesso:this.caixapostal_direito_acesso,
        local_direito_acesso:this.local_direito_acesso,
        ilha_direito_acesso:this.ilhaDirAcess,
        concelho_direito_acesso:this.concelhoDirAcess,
        email_direito_acesso:this.email_direito_acesso,
        telefone_direito_acesso:this.telefone_direito_acesso,
        forma_direito_acesso:this.formaDireitoAcesso,
        outrasformas_direito_acesso:this.outrasformas_direito_acesso,
        parecer_representante_trabalhadores:this.parecer_representante_trabalhadores,
        medidade_seguranca_fisica:this.medidade_seguranca_fisica,
        medidas_seguranca_logica: this.medidade_seguranca_logica,
        regulamento_interno:this.regulamento_interno,
        dados_contido_em_cada_registros:this.finalidadiCategory 

     };
     try { 
      
     await axios.post(`${API_ENDPOINT}/api/tic/store`, data, {
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
        return "Carater inválido, Precisa ser um número!";
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
      this.tipoNotificacoes = data.tipoNotificacoes; 
      
    },/*
     
    /*FINALIDADES MULTIPLAS*/

    addRegistro() {
      this.finalidadiCategory.push({
        //categoria: "",
        //finalidadesCategorias: "",
      });
    },
    removeRegistro(index) {
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
    changeRepTrab() {
      this.checkRepTrab = !this.checkRepTrab;
    },
    changeRegInterno() {
      this.checkRegInterno = !this.checkRegInterno;
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
#alignCenter{
  text-align: center;
}
#cambs {
  margin-top: 5px;
}
.add {
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
}
.tic {
  font-family: "Times New Roman", Times, serif;
 /* padding-top: 110px;*/
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
