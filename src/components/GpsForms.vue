<template>
  <section id="GEO" class="GEO">
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
            <b
              >Formulário de Geolocalização de Viaturas no Contexto Laboral -
              GPS</b
            >
          </router-link>
        </h5>
      </div>
      <Form @submit="onSubmit">
        <!-- FORMS GEO-->
        <div class="section-title">
          <h2>NOTIFICAÇÃO DE GEOLOCALIZAÇÃO DE VIATURAS NO CONTEXTO LABORAL</h2>
        </div>

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
                    1. Responsável pelo Tratamento
                    <br />
                  </div>
                  <div class="col-md-12"><br /></div>
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
                      <ErrorMessage
                        class="errorMessage"
                        name="local_responsavel_tratamento"
                      />
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
                        v-model="telefone_responsavel_tratamento"
                        type="number"
                        class="form-control"
                        name="telefone_responsavel_tratamento"
                        id="telefone_responsavel_tratamento"
                        alt="Telefone/Telemovel"
                        placeholder="Contato: Telefone/Telemovel"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="telefone_responsavel_tratamento"
                      />
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
                      <ErrorMessage
                        class="errorMessage"
                        name="email_responsavel_tratamento"
                      />
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
              <div class="col-md-12">
                <Field
                  :rules="validateText"
                  type="text"
                  class="form-control"
                  name="nome_representante_instalacao"
                  id="nome_representante_instalacao"
                  v-model="nome_representante_instalacao"
                  placeholder=" Representante"
                />
                <ErrorMessage
                  class="errorMessage"
                  name="nome_representante_instalacao"
                />
              </div>
              <div class="col">
                <Field
                  type="text"
                  class="form-control"
                  name="rua_representante_instalacao"
                  id="rua_representante_instalacao"
                  placeholder=" Rua "
                  v-model="rua_representante_instalacao"
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
                      <ErrorMessage
                        class="errorMessage"
                        name="local_representante_instalacao"
                      />
                    </div>
                    <div class="col">
                      <input
                        disabled
                        type="text"
                        class="form-control"
                        name="paisRep"
                        id="paisRep"
                        v-model="paisRep"
                        placeholder="Cabo Verde"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <Field
                    :rules="validateText"
                    type="text"
                    class="form-control"
                    name="nome_pessoa_contato_representante_instalacao"
                    id="nome_pessoa_contato_representante_instalacao"
                    placeholder="Nome da pessoa de contato"
                    v-model="nome_pessoa_contato_representante_instalacao"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="nome_pessoa_contato_representante_instalacao"
                  />
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
                      <ErrorMessage
                        class="errorMessage"
                        name="email_pessoa_representante_instalacao"
                      />
                    </div>
                    <div class="col">
                      <Field
                        :rules="validateNumber"
                        type="number"
                        class="form-control"
                        name="contato_representante_instalacao"
                        id="contato_representante_instalacao"
                        placeholder="Contato: Telefone/Telemovel"
                        v-model="contato_representante_instalacao"
                      />
                      <ErrorMessage
                        class="errorMessage"
                        name="contato_representante_instalacao"
                      />
                    </div>
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
                    placeholder=" Qual a Entidade Encarregue pelo proccessamento das imagens"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="entidade_processamento_informacao"
                  />
                </div>
                <div class="col-md-12">
                  <Field
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
                    v-model="local_processamento_informacao"
                    placeholder="Cidade/Vila/Lugar/Zona da Entidade"
                  />
                  <ErrorMessage
                    class="errorMessage"
                    name="local_processamento_informacao"
                  />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!---- ----------------- Finalidade e Categoria de dados Pesoais-------------------------------------------------------------------->

        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                2. Finalidades do Tratamento
              </div>
              <div class="col-md-12"><br /></div>
              <div class="col-md-12">
                <label class="form-check-label">
                  Indique a(s) finalidade(s) do tratamento de dados
                </label>
                <treeselect
                  :multiple="true"
                  :options="finalidadesTratamento"
                  :disable-branch-nodes="true"
                  placeholder="- Selecione as finalidades - "
                  v-model="finalidade"
                  search-nested
                />

                <!--<pre class="language-json"><code>{{finalidade}}</code></pre>-->
              </div>

              <div class="col-md-12"><br /></div>
              <div class="col">
                <label class="form-check-label">
                  Categorias dos dados pessoais tratados
                </label>

                <treeselect
                  :multiple="true"
                  :options="categoriasDados"
                  placeholder="- Selecione as categorias de dados - "
                  v-model="categoria"
                />
                <!--<pre class="language-json"><code>{{categoria}}</code></pre>-->
              </div>
              <div class="col">
                <label class="form-check-label">
                  Outros dados pessoais tratados
                </label>
                <treeselect
                  :multiple="true"
                  :options="outrosDadosTratados"
                  :disable-branch-nodes="true"
                  placeholder="- Selecione os dados tratados - "
                  v-model="outrosDadosTratado"
                  search-nested
                />

                <!--<pre class="language-json"><code>{{outrosDadosTratado}}</code></pre>-->
              </div>
              <div class="col-md-12"><br /></div>
            </div>
          </div>
        </div>
        <!--------------------------------DIREITO ACESSO---------------------------->
        <div class="col" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                3.Exercício do direito de acesso às imagens gravadas
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
                        id="contato_direito_acesso"
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
                4. Medidas de segurança a implementar
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
        <div class="col-md-12" id="divg">
          <div class="container">
            <div class="row">
              <div class="col-md-12" id="separacao">
                5. Representante dos trabalhadores
              </div>
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
                  >Se sim, juntar a cópia do parecer ou comprovativo do pedido
                  em formato PDF.</label
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
                <ErrorMessage
                  class="errorMessage"
                  name="parecer_representante_trabalhadores"
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
// import the component
import Treeselect from "vue3-treeselect";

import { API_ENDPOINT } from "../main.js";
// import the styles
import "vue3-treeselect/dist/vue3-treeselect.css";
import { Form, Field, ErrorMessage } from "vee-validate";

import axios from "axios";
export default {
  components: {
    Treeselect,
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    return {
      showModal: false,
      ErrorModal: false,
      nomeDenominacao: "",
      checkMorada: false,
      checkServico: false,
      checkDireitoAcesso: false,
      checkRepTrab: false,

      /**************************TIPO NOTIFICACAO *********************************** */
      tipoNotificacao: null, 

      /**********************************ATIVIDADE DESENVOLVIDA*********************************************** */
      atividade: null,
      atividadeSR: null, 

      /******************************FINALIDADES E CATEGORIA DO TRATAMENTO*******************************/
      //FINALIDADE
      finalidade: [],
      finalidadesTratamento: [
        {
          id: "Gestão da frota em serviço",
          label: "Gestão da frota em serviço",
          children: [
            {
              id: "Assistência técnica externa/ao domicílio",
              label: "Assistência técnica externa/ao domicílio",
            },
            {
              id: "Transporte público de passageiros",
              label: "Transporte público de passageiros",
            },
            {
              id: "Transporte de mercadorias",
              label: "Transporte de mercadorias",
            },
            {
              id: "Destribuição de bens",
              label: "Destribuição de bens",
            },
            {
              id: "Segurança privada",
              label: "Segurança privada",
            },
          ],
        },
        {
          id: "Proteção de pessoas e carga de materiais perigosos",
          label: "Proteção de pessoas e carga de materiais perigosos",
        },
        {
          id: "Proteção de carga de materiais de valor",
          label: "Proteção de carga de materiais de valor",
        },
        {
          id: "Participação criminal em caso de furto",
          label: "Participação criminal em caso de furto",
        },
      ],
      //CATEGORIA DE DADOS
      categoria: [],
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
      categoriasDados: [
        {
          id: "Dados de geolocalização de viatura",
          label: "Dados de geolocalização de viatura",
        },
        {
          id: "Dados relativos à identificação do veículo",
          label: "Dados relativos à identificação do veículo",
        },
        {
          id: "Dados de identificação dos trabalhadores",
          label: "Dados de identificação dos trabalhadores",
        },
      ],
      //OUTROS DADOS TRATADOS
      outrosDadosTratado: [],
      outrosDadosTratados: [
        {
          id: "Outros dados para gestão de frota em serviço externo:",
          label: "Outros dados para gestão de frota em serviço externo:",
          children: [
            {
              id: "Dados relativos ao serviço a prestar",
              value: "Dados relativos ao serviço a prestar",
              label: "Dados relativos ao serviço a prestar",
            },
            {
              id: "Dados relativos à carga transportada",
              value: "Dados relativos à carga transportada",
              label: "Dados relativos à carga transportada",
            },
          ],
        },
        {
          id: "Outros dados para proteção de pessoas e carga de materiais perigosos",
          label:
            "Outros dados para proteção de pessoas e carga de materiais perigosos",
          children: [
            {
              id: "Dados relativos ao transporte",
              value: "Dados relativos ao transporte",
              label: "Dados relativos ao transporte",
            },
            {
              id:"Percurso previsto",
              value: "Percurso previsto",
              label: "Percurso previsto",
            },
            {
              id: "Carga transportada",
              value: "Carga transportada",
              label: "Carga transportada",
            },
            {
              id: "Procedimentos de segurança e/ou emergência adotados",
              value: "Procedimentos de segurança e/ou emergência adotados",
              label: "Procedimentos de segurança e/ou emergência adotados",
            },
          ],
        },
        {
          id: "Outros dados para a proteção de carga de materiais de valor:",
          label: "Outros dados para a proteção de carga de materiais de valor:",
          children: [
            {
              id: "Carateristicas da viatura",
              value: "Carateristicas da viatura",
              label: "Carateristicas da viatura",
            },
            {
              id: "Dados relativos ao transporte",
              value: "Dados relativos ao transporte",
              label: "Dados relativos ao transporte",
            },
            {
              id: "Percurso previsto",
              value: "Percurso previsto",
              label: "Percurso previsto",
            },
            {
              id: "Carga transportada",
              value: "Carga transportada",
              label: "Carga transportada",
            },
            {
              id: "Procedimentos de segurança e/ou emergência adotados",
              value: "Procedimentos de segurança e/ou emergência adotados",
              label: "Procedimentos de segurança e/ou emergência adotados",
            },
          ],
        },
      ],

      /** *********************ILHAS E CONCELHOS ************************************** */
      ilhaResp: null,
      ilhaMorRep: null,
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
      concelhoMorRep: null,
      concelhoServExt: null,
      concelhoDirAcess: null,
      concelhoResp: null,

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

      /** *********************************************************** */
      nome_denominacao: "",
      nome_comercial: "",
      tipo_notificacao: "",
      tipo_pessoa: "",
      atividade_desenvolvida: "",
      numero_nif: "",
      rua_responsavel_tratamento: "",
      local_responsavel_tratamento: "",
      telefone_responsavel_tratamento: "",
      email_responsavel_tratamento: "",
      pais_responsavel_tratamento: "",
      nome_representante_instalacao: "",
      email_pessoa_representante_instalacao: "",
      contato_representante_instalacao: "",
      rua_representante_instalacao: "",
      caixapostal_representante_instalacao: "",
      local_representante_instalacao: "", 
      nome_pessoa_contato_representante_instalacao: "",
      ilha_responsavel_tratamento: "",
      concelho_responsavel_tratamento: "",
      caixapostal_responsavel_tratamento: "", 
      entidade_processamento_informacao: "",
      rua_processamento_informacao: "",
      caixapostal_processamento_informacao: "",
      local_processamento_informacao: "",
      ilha_processamento_informacao: "",
      concelho_processamento_informacao: "",
      finalidadeTratamento: "",
      categoriaDados: "",
      outrosDados: "",
      paisRep:"",
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
      parecer_representante_trabalhadores: "",
    };
  },

  methods: {
    async onSubmit(/*values*/) {
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
        telefone_responsavel_tratamento: this.telefone_responsavel_tratamento,
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
        finalidadeTratamento: this.finalidade,
        categoriaDados: this.categoria,
        outrosDados: this.outrosDadosTratado,
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
        parecer_representante_trabalhadores:
          this.parecer_representante_trabalhadores,
      };
       
 //SUBMIT FORM WITH AXIOS 
 try { 
      await axios.post(`${API_ENDPOINT}/api/geolocalizacao/create`, datas, { 
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
    changeServico() {
      this.checkServico = !this.checkServico;
    },
    changeDireitoAcesso() {
      this.checkDireitoAcesso = !this.checkDireitoAcesso;
    },

    changeRepTrab() {
      this.checkRepTrab = !this.checkRepTrab;
    },
  },
/*
  mounted() {
    this.dadosBackend();
  },*/
};
</script>

<style>
.GEO {
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

 
/**TREE SELECT STYLES*/

.vue-treeselect-helper-hide {
  display: none;
}
.vue-treeselect-helper-zoom-effect-off {
  -webkit-transform: none !important;
  transform: none !important;
}
@-webkit-keyframes vue-treeselect-animation-fade-in {
  0% {
    opacity: 0;
  }
}
@keyframes vue-treeselect-animation-fade-in {
  0% {
    opacity: 0;
  }
}
@-webkit-keyframes vue-treeselect-animation-bounce {
  0%,
  to {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes vue-treeselect-animation-bounce {
  0%,
  to {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes vue-treeselect-animation-rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes vue-treeselect-animation-rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.vue-treeselect__multi-value-item--transition-enter-active,
.vue-treeselect__multi-value-item--transition-leave-active {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
}
.vue-treeselect__multi-value-item--transition-enter-active {
  -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
.vue-treeselect__multi-value-item--transition-leave-active {
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  position: absolute;
}
.vue-treeselect__multi-value-item--transition-enter,
.vue-treeselect__multi-value-item--transition-leave-to {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  opacity: 0;
}
.vue-treeselect__multi-value-item--transition-move {
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
    -webkit-transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
/*
.vue-treeselect:focus,
.vue-treeselect:hover {
  outline: none !important;
  border-color: #061536;
  box-shadow: 0 0 10px #061536;
  font-family: "Times New Roman", Times, serif;;
}*/
.vue-treeselect {
  position: relative;
  text-align: left;
  font-family: "Times New Roman", Times, serif;
}
[dir="rtl"] .vue-treeselect {
  text-align: right;
}
.vue-treeselect div,
.vue-treeselect span {
  box-sizing: border-box;
}
.vue-treeselect svg {
  fill: currentColor;
}
.vue-treeselect__control {
  padding-left: 5px;
  padding-right: 5px;
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 36px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: border-color, box-shadow, width, height,
    background-color, opacity;
  transition-property: border-color, box-shadow, width, height, background-color,
    opacity;
  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.vue-treeselect:not(.vue-treeselect--disabled):not(.vue-treeselect--focused)
  .vue-treeselect__control:hover {
  border-color: #cfcfcf;
}
.vue-treeselect--focused:not(.vue-treeselect--open) .vue-treeselect__control {
  border-color: #061536;
  box-shadow: 0 0 0 3px rgba(3, 155, 229, 0.1);
}
.vue-treeselect--disabled .vue-treeselect__control {
  background-color: #f9f9f9;
}
.vue-treeselect--open .vue-treeselect__control {
  border-color: #cfcfcf;
}
.vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.vue-treeselect--open.vue-treeselect--open-above .vue-treeselect__control {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.vue-treeselect__multi-value,
.vue-treeselect__value-container {
  width: 100%;
  vertical-align: middle;
}
.vue-treeselect__value-container {
  display: table-cell;
  position: relative;
}
.vue-treeselect--searchable:not(.vue-treeselect--disabled)
  .vue-treeselect__value-container {
  cursor: text;
}
.vue-treeselect__multi-value {
  display: inline-block;
}
.vue-treeselect--has-value .vue-treeselect__multi-value {
  margin-bottom: 5px;
}
.vue-treeselect__placeholder,
.vue-treeselect__single-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  line-height: 34px;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}
.vue-treeselect__placeholder {
  color: #bdbdbd;
}
.vue-treeselect__single-value {
  color: #333;
}
.vue-treeselect--focused.vue-treeselect--searchable
  .vue-treeselect__single-value {
  color: #061536;
  /*aquiii */
}
.vue-treeselect--disabled .vue-treeselect__single-value {
  position: static;
}
.vue-treeselect__multi-value-item-container {
  display: inline-block;
  padding-top: 5px;
  padding-right: 5px;
  vertical-align: top;
}
[dir="rtl"] .vue-treeselect__multi-value-item-container {
  padding-right: 0;
  padding-left: 5px;
}
.vue-treeselect__multi-value-item {
  display: inline-table;
  padding: 2px 0;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: var(--ms-font-size, 15px);
  vertical-align: top;
}
.vue-treeselect:not(.vue-treeselect--disabled)
  .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-disabled):hover
  .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new)
  .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new):hover,
.vue-treeselect__multi-value-item {
  cursor: pointer;
  background: #061536;
  color: #fff;
}
.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-disabled {
  cursor: default;
  background: #f5f5f5;
  color: #757575;
}
.vue-treeselect--disabled .vue-treeselect__multi-value-item {
  cursor: default;
  background: #fff;
  border-color: #e5e5e5;
  color: #555;
}
.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new,
.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new:hover {
  background: #e8f5e9;
}
.vue-treeselect__multi-value-label,
.vue-treeselect__value-remove {
  display: table-cell;
  padding: 0 5px;
  vertical-align: middle;
}
.vue-treeselect__value-remove {
  color: #061536;
  padding-left: 5px;
  border-left: 1px solid #fff;
  line-height: 0;
}
[dir="rtl"] .vue-treeselect__value-remove {
  border-left: 0 none;
  border-right: 1px solid #fff;
}
.vue-treeselect__multi-value-item:hover .vue-treeselect__value-remove {
  color: #e53935;
}
.vue-treeselect--disabled .vue-treeselect__value-remove,
.vue-treeselect__multi-value-item-disabled .vue-treeselect__value-remove {
  display: none;
}
.vue-treeselect__value-remove > svg {
  width: 6px;
  height: 6px;
}
.vue-treeselect__multi-value-label {
  padding-right: 5px;
  white-space: pre-line;
  -webkit-user-select: none;
  user-select: none;
}
.vue-treeselect__limit-tip {
  display: inline-block;
  padding-top: 5px;
  padding-right: 5px;
  vertical-align: top;
}
[dir="rtl"] .vue-treeselect__limit-tip {
  padding-right: 0;
  padding-left: 5px;
}
.vue-treeselect__limit-tip-text {
  cursor: default;
  display: block;
  margin: 2px 0;
  padding: 1px 0;
  color: #bdbdbd;
  font-size: var(--ms-font-size, 15px);
  font-weight: 600;
}
.vue-treeselect__input-container {
  display: block;
  max-width: 100%;
  outline: none;
}
.vue-treeselect--single .vue-treeselect__input-container {
  font-size: inherit;
  height: 100%;
}
.vue-treeselect--multi .vue-treeselect__input-container {
  display: inline-block;
  font-size: var(--ms-font-size, 15px);
  vertical-align: top;
}
.vue-treeselect--searchable .vue-treeselect__input-container {
  padding-left: 5px;
  padding-right: 5px;
}
.vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value
  .vue-treeselect__input-container {
  padding-top: 5px;
  padding-left: 0;
}
[dir="rtl"]
  .vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value
  .vue-treeselect__input-container {
  padding-left: 5px;
  padding-right: 0;
}
.vue-treeselect--disabled .vue-treeselect__input-container {
  display: none;
}
.vue-treeselect__input,
.vue-treeselect__sizer {
  margin: 0;
  line-height: inherit;
  font-family: "Times New Roman", Times, serif;
  font-size: inherit;
}
.vue-treeselect__input {
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: initial;
  box-shadow: none;
  background: none transparent;
  line-height: 1;
  vertical-align: middle;
}
.vue-treeselect__input::-ms-clear {
  display: none;
}
.vue-treeselect--single .vue-treeselect__input {
  width: 100%;
  height: 100%;
}
.vue-treeselect--multi .vue-treeselect__input {
  padding-top: 3px;
  padding-bottom: 3px;
}
.vue-treeselect--has-value .vue-treeselect__input {
  line-height: inherit;
  vertical-align: top;
}
.vue-treeselect__sizer {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  height: 0;
  overflow: scroll;
  white-space: pre;
}
.vue-treeselect__x-container {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
  cursor: pointer;
  color: #ccc;
  -webkit-animation: vue-treeselect-animation-fade-in 0.2s
    cubic-bezier(0.075, 0.82, 0.165, 1);
  animation: vue-treeselect-animation-fade-in 0.2s
    cubic-bezier(0.075, 0.82, 0.165, 1);
}
.vue-treeselect__x-container:hover {
  color: #e53935;
}
.vue-treeselect__x {
  width: 8px;
  height: 8px;
}
.vue-treeselect__control-arrow-container {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
  cursor: pointer;
}
.vue-treeselect--disabled .vue-treeselect__control-arrow-container {
  cursor: default;
}
.vue-treeselect__control-arrow {
  width: 9px;
  height: 9px;
  color: #ccc;
}
.vue-treeselect:not(.vue-treeselect--disabled)
  .vue-treeselect__control-arrow-container:hover
  .vue-treeselect__control-arrow {
  color: #616161;
}
.vue-treeselect--disabled .vue-treeselect__control-arrow {
  opacity: 0.35;
}
.vue-treeselect__control-arrow--rotated {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.vue-treeselect__menu-container {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: visible;
  -webkit-transition: 0s;
  transition: 0s;
}
.vue-treeselect--open-below:not(.vue-treeselect--append-to-body)
  .vue-treeselect__menu-container {
  top: 100%;
}
.vue-treeselect--open-above:not(.vue-treeselect--append-to-body)
  .vue-treeselect__menu-container {
  bottom: 100%;
}
.vue-treeselect__menu {
  cursor: default;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  width: auto;
  border: 1px solid #cfcfcf;
  background: #fff;
  line-height: 180%;
  -webkit-overflow-scrolling: touch;
}
.vue-treeselect--open-below .vue-treeselect__menu {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  top: 0;
  margin-top: -1px;
  border-top-color: #f2f2f2;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.vue-treeselect--open-above .vue-treeselect__menu {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  bottom: 0;
  margin-bottom: -1px;
  border-bottom-color: #f2f2f2;
}
.vue-treeselect__indent-level-0 .vue-treeselect__option {
  padding-left: 5px;
}
[dir="rtl"] .vue-treeselect__indent-level-0 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 5px;
}
.vue-treeselect__indent-level-0 .vue-treeselect__tip {
  padding-left: 25px;
}
[dir="rtl"] .vue-treeselect__indent-level-0 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 25px;
}
.vue-treeselect__indent-level-1 .vue-treeselect__option {
  padding-left: 25px;
}
[dir="rtl"] .vue-treeselect__indent-level-1 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 25px;
}
.vue-treeselect__indent-level-1 .vue-treeselect__tip {
  padding-left: 45px;
}
[dir="rtl"] .vue-treeselect__indent-level-1 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 45px;
}
.vue-treeselect__indent-level-2 .vue-treeselect__option {
  padding-left: 45px;
}
[dir="rtl"] .vue-treeselect__indent-level-2 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 45px;
}
.vue-treeselect__indent-level-2 .vue-treeselect__tip {
  padding-left: 65px;
}
[dir="rtl"] .vue-treeselect__indent-level-2 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 65px;
}
.vue-treeselect__indent-level-3 .vue-treeselect__option {
  padding-left: 65px;
}
[dir="rtl"] .vue-treeselect__indent-level-3 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 65px;
}
.vue-treeselect__indent-level-3 .vue-treeselect__tip {
  padding-left: 85px;
}
[dir="rtl"] .vue-treeselect__indent-level-3 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 85px;
}
.vue-treeselect__indent-level-4 .vue-treeselect__option {
  padding-left: 85px;
}
[dir="rtl"] .vue-treeselect__indent-level-4 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 85px;
}
.vue-treeselect__indent-level-4 .vue-treeselect__tip {
  padding-left: 105px;
}
[dir="rtl"] .vue-treeselect__indent-level-4 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 105px;
}
.vue-treeselect__indent-level-5 .vue-treeselect__option {
  padding-left: 105px;
}
[dir="rtl"] .vue-treeselect__indent-level-5 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 105px;
}
.vue-treeselect__indent-level-5 .vue-treeselect__tip {
  padding-left: 125px;
}
[dir="rtl"] .vue-treeselect__indent-level-5 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 125px;
}
.vue-treeselect__indent-level-6 .vue-treeselect__option {
  padding-left: 125px;
}
[dir="rtl"] .vue-treeselect__indent-level-6 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 125px;
}
.vue-treeselect__indent-level-6 .vue-treeselect__tip {
  padding-left: 145px;
}
[dir="rtl"] .vue-treeselect__indent-level-6 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 145px;
}
.vue-treeselect__indent-level-7 .vue-treeselect__option {
  padding-left: 145px;
}
[dir="rtl"] .vue-treeselect__indent-level-7 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 145px;
}
.vue-treeselect__indent-level-7 .vue-treeselect__tip {
  padding-left: 165px;
}
[dir="rtl"] .vue-treeselect__indent-level-7 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 165px;
}
.vue-treeselect__indent-level-8 .vue-treeselect__option {
  padding-left: 165px;
}
[dir="rtl"] .vue-treeselect__indent-level-8 .vue-treeselect__option {
  padding-left: 5px;
  padding-right: 165px;
}
.vue-treeselect__indent-level-8 .vue-treeselect__tip {
  padding-left: 185px;
}
[dir="rtl"] .vue-treeselect__indent-level-8 .vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 185px;
}
.vue-treeselect__option {
  padding-left: 5px;
  padding-right: 5px;
  display: table;
  table-layout: fixed;
  width: 100%;
}
.vue-treeselect__option--highlight {
  background: #f5f5f5;
}
.vue-treeselect--single .vue-treeselect__option--selected {
  background: #e3f2fd;
  font-weight: 600;
}
.vue-treeselect--single .vue-treeselect__option--selected:hover {
  background: #e3f2fd;
}
.vue-treeselect__option--hide {
  display: none;
}
.vue-treeselect__option-arrow-container,
.vue-treeselect__option-arrow-placeholder {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
}
.vue-treeselect__option-arrow-container {
  cursor: pointer;
}
.vue-treeselect__option-arrow {
  display: inline-block;
  width: 9px;
  height: 9px;
  color: #ccc;
  vertical-align: middle;
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  transition: -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1),
    -webkit-transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
[dir="rtl"] .vue-treeselect__option-arrow {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.vue-treeselect--branch-nodes-disabled
  .vue-treeselect__option:hover
  .vue-treeselect__option-arrow,
.vue-treeselect__option-arrow-container:hover .vue-treeselect__option-arrow {
  color: #616161;
}
.vue-treeselect__option-arrow--rotated,
[dir="rtl"] .vue-treeselect__option-arrow--rotated {
  -webkit-transform: rotate(0);
  transform: rotate(0);
}
.vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {
  -webkit-transform: rotate(-90deg) !important;
  transform: rotate(-90deg) !important;
}
[dir="rtl"]
  .vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {
  -webkit-transform: rotate(90deg) !important;
  transform: rotate(90deg) !important;
}
.vue-treeselect__label-container {
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
  display: table;
  width: 100%;
  table-layout: fixed;
  color: inherit;
}
.vue-treeselect__option--disabled .vue-treeselect__label-container {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.25);
}
.vue-treeselect__checkbox-container {
  display: table-cell;
  width: 20px;
  min-width: 20px;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}
.vue-treeselect__checkbox {
  display: block;
  margin: auto;
  width: 12px;
  height: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  position: relative;
  -webkit-transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.vue-treeselect__check-mark,
.vue-treeselect__minus-mark {
  display: block;
  position: absolute;
  left: 1px;
  top: 1px;
  background-repeat: no-repeat;
  opacity: 0;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.vue-treeselect__minus-mark {
  width: 8px;
  height: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAD///////9zeKVjAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);
  background-size: 8px 8px;
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);
  }
}
.vue-treeselect__checkbox--indeterminate > .vue-treeselect__minus-mark {
  opacity: 1;
}
.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAADi4uLh4eHOxeSRAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAADh4eHg4ODNzc3h4eEYfw2wAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);
  }
}
.vue-treeselect__check-mark {
  width: 8px;
  height: 8px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA8u24NxILB+Tawb6jiH1zRz0xIQIIP3GUAAAAMklEQVQI1y3FtQEAMQDDQD+EGbz/qkEVOpyEOP6PudKjZNSXn4Jm2CKRdBKzSLsFWl8fMG0Bl6Jk1rMAAAAASUVORK5CYII=);
  background-size: 8px 8px;
  -webkit-transform: scaleY(0.125);
  transform: scaleY(0.125);
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA/PiJhGNI9XlEHJB/b2ldV08+Oibk49vPp6QhAYgGBuwAAACCSURBVCjPrdHdDoIwDAXgTWAqCigo/+f9X5OwnoUwtis4V92XNWladUl+rzQPeQJAN2EHxoOnsPn7/oYk8fxBv08Rr/deOH/aZ2Nm8ZJ+s573QGfWKnNuZGzWm3+lv2V3pcU1XQ385/yjmBoM3Z+dXvlbYLLD3ujhTaOM3KaIXvNkFkuSEvYy1LqOAAAAAElFTkSuQmCC);
  }
}
.vue-treeselect__checkbox--checked > .vue-treeselect__check-mark {
  opacity: 1;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUAAADj4+Pf39/h4eHh4eHh4eHk5OTh4eHg4ODi4uLh4eHh4eHg4ODh4eHh4eHg4ODh4eHh4eHp6en////h4eFqcyvUAAAAFHRSTlMAOQfy7bgS5NrBvqOIfXNHMSELAgQ/iFsAAAA2SURBVAjXY4AANjYIzcjMAaVFuBkY+RkEWERYmRjYRXjANAOfiIgIFxNIAa8IpxBEi6AwiAQAK2MBd7xY8csAAAAASUVORK5CYII=);
}
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);
  }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUAAADh4eHh4eHh4eHh4eHi4uLi4uLh4eHh4eHh4eHf39/j4+Ph4eHh4eHh4eHg4ODi4uLh4eHh4eHi4uLh4eHh4eHh4eHh4eHh4eH////h4eF3FMFTAAAAGnRSTlMA+/eJhGhfSHE9JBzz5KaQf3pXT0Xbz0I5AYDw8F0AAAB+SURBVCjPrdHbDoMgEEVRKAii1dZe9fz/hxplTiKIT7qfYCWTEEZdUvOwbckNAD2WHeh3brHW5f5EzGQ+iN+b1Gt6KPvtv16Dn6JX9M9ya3/A1yfu5dlyduL6Hec7mXY6ddXLPP2lpABGZ8PWXfYLTJxZekVhhl7eTX24zZPNKXoRC7zQLjUAAAAASUVORK5CYII=);
  }
}
.vue-treeselect__checkbox--unchecked {
  border-color: #e0e0e0;
  background: #fff;
}
.vue-treeselect__label-container:hover .vue-treeselect__checkbox--unchecked {
  border-color: #061536;
  background: #fff;
}
.vue-treeselect__checkbox--checked,
.vue-treeselect__checkbox--indeterminate,
.vue-treeselect__label-container:hover .vue-treeselect__checkbox--checked,
.vue-treeselect__label-container:hover
  .vue-treeselect__checkbox--indeterminate {
  border-color: #061536;
  background: #061536;
}
.vue-treeselect__checkbox--disabled,
.vue-treeselect__label-container:hover .vue-treeselect__checkbox--disabled {
  border-color: #e0e0e0;
  background-color: #f7f7f7;
}
.vue-treeselect__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: table-cell;
  padding-left: 5px;
  max-width: 100%;
  vertical-align: middle;
  cursor: inherit;
}
[dir="rtl"] .vue-treeselect__label {
  padding-left: 0;
  padding-right: 5px;
}
.vue-treeselect__count {
  margin-left: 5px;
  font-weight: 400;
  opacity: 0.6;
}
[dir="rtl"] .vue-treeselect__count {
  margin-left: 0;
  margin-right: 5px;
}
.vue-treeselect__tip {
  padding-left: 5px;
  padding-right: 5px;
  display: table;
  table-layout: fixed;
  width: 100%;
  color: #757575;
}
.vue-treeselect__tip-text {
  display: table-cell;
  vertical-align: middle;
  padding-left: 5px;
  padding-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: var(--ms-font-size, 15px);
}
.vue-treeselect__error-tip .vue-treeselect__retry {
  cursor: pointer;
  margin-left: 5px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  color: #061536;
}
[dir="rtl"] .vue-treeselect__error-tip .vue-treeselect__retry {
  margin-left: 0;
  margin-right: 5px;
}
.vue-treeselect__icon-container {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  line-height: 0;
}
.vue-treeselect--single .vue-treeselect__icon-container {
  padding-left: 5px;
}
[dir="rtl"] .vue-treeselect--single .vue-treeselect__icon-container {
  padding-left: 0;
  padding-right: 5px;
}
.vue-treeselect__icon-warning {
  display: block;
  margin: auto;
  border-radius: 50%;
  position: relative;
  width: 12px;
  height: 12px;
  background: #061536;
}
.vue-treeselect__icon-warning:after {
  display: block;
  position: absolute;
  content: "";
  left: 5px;
  top: 2.5px;
  width: 2px;
  height: 1px;
  border: 0 solid #fff;
  border-top-width: 5px;
  border-bottom-width: 1px;
}
.vue-treeselect__icon-error {
  display: block;
  margin: auto;
  border-radius: 50%;
  position: relative;
  width: 12px;
  height: 12px;
  background: #e53935;
}
.vue-treeselect__icon-error:after,
.vue-treeselect__icon-error:before {
  display: block;
  position: absolute;
  content: "";
  background: #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.vue-treeselect__icon-error:before {
  width: 6px;
  height: 2px;
  left: 3px;
  top: 5px;
}
.vue-treeselect__icon-error:after {
  width: 2px;
  height: 6px;
  left: 5px;
  top: 3px;
}
.vue-treeselect__icon-loader {
  display: block;
  margin: auto;
  position: relative;
  width: 12px;
  height: 12px;
  text-align: center;
  -webkit-animation: vue-treeselect-animation-rotate 1.6s linear infinite;
  animation: vue-treeselect-animation-rotate 1.6s linear infinite;
}
.vue-treeselect__icon-loader:after,
.vue-treeselect__icon-loader:before {
  border-radius: 50%;
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  -webkit-animation: vue-treeselect-animation-bounce 1.6s ease-in-out infinite;
  animation: vue-treeselect-animation-bounce 1.6s ease-in-out infinite;
}
.vue-treeselect__icon-loader:before {
  background: #061536;
}
.vue-treeselect__icon-loader:after {
  background: #061536;
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.vue-treeselect__menu-placeholder {
  display: none;
}
.vue-treeselect__portal-target {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  height: 0;
  width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: visible;
  box-sizing: border-box;
}

</style>
